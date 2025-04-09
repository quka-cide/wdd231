export default function LoadQuiz(quizData) {
    const quizContainer = document.getElementById("quiz-container");
    quizData.forEach((q, index) => {
        let questionHTML = `
            <div class='question'>
                <p><strong>Question ${index + 1}: </strong>${q.question}</p>
                <p><strong>Category:</strong> ${q.category}</p>
                <p><strong>Difficulty:</strong> ${q.difficulty}</p>
            `;

        q.options.forEach(option => {
            questionHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        questionHTML += "</div>";
        quizContainer.innerHTML += questionHTML;
    });
}