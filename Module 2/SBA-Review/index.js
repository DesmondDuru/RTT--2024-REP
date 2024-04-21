function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // Validate CourseInfo and AssignmentGroup
    if (courseInfo.id !== assignmentGroup.course_id) {
        throw new Error("Invalid input: AssignmentGroup does not belong to the specified course.");
    }

    const learnerData = [];

    // Calculate learner's scores for each assignment
    const assignmentScores = {};
    assignmentGroup.assignments.forEach(assignment => {
        const assignmentId = assignment.id;
        const dueDate = new Date(assignment.due_at);
        const pointsPossible = assignment.points_possible;

        // Only process submissions for assignments that are due
        if (dueDate > new Date()) {
            return;
        }

        learnerSubmissions.forEach(submission => {
            if (submission.assignment_id === assignmentId) {
                const submissionDate = new Date(submission.submission.submitted_at);
                const score = submission.submission.score;
                
                // Check for late submission
                if (submissionDate > dueDate) {
                    const latePenalty = pointsPossible * 0.1;
                    score -= latePenalty;
                }

                // Calculate percentage score
                const percentageScore = (score / pointsPossible) * 100;
                if (!assignmentScores[submission.learner_id]) {
                    assignmentScores[submission.learner_id] = {};
                }
                assignmentScores[submission.learner_id][assignmentId] = percentageScore;
            }
        });
    });

    // Calculate weighted average for each learner
    Object.keys(assignmentScores).forEach(learnerId => {
        const learnerScores = assignmentScores[learnerId];
        let totalScore = 0;
        let totalWeight = 0;

        assignmentGroup.assignments.forEach(assignment => {
            const assignmentId = assignment.id;
            const weight = assignment.group_weight;
            if (learnerScores[assignmentId]) {
                totalScore += (learnerScores[assignmentId] * weight);
                totalWeight += weight;
            }
        });

        const weightedAverage = (totalScore / totalWeight).toFixed(2);
        const learnerResult = {
            id: parseInt(learnerId),
            avg: parseFloat(weightedAverage)
        };

        // Add assignment scores to learner result
        Object.assign(learnerResult, assignmentScores[learnerId]);

        learnerData.push(learnerResult);
    });

    return learnerData;
}

// Example usage:
const courseInfo = {
    id: 1,
    name: "Sample Course"
};

const assignmentGroup = {
    id: 1,
    name: "Group 1",
    course_id: 1,
    group_weight: 50,
    assignments: [
        {
            id: 1,
            name: "Assignment 1",
            due_at: "2024-05-01T00:00:00Z",
            points_possible: 100
        },
        {
            id: 2,
            name: "Assignment 2",
            due_at: "2024-05-10T00:00:00Z",
            points_possible: 200
        }
    ]
};

const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-05-01T08:00:00Z",
            score: 90
        }
    },
    {
        learner_id: 1,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-05-12T08:00:00Z",
            score: 180
        }
    }
];

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
