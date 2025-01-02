import { v4 as UUIDv4 } from "uuid";
class Results {
    constructor() {
        this.bone_structure_of_the_body = [];
        this.facial_bones = [];
        this.flesh_of_the_body = [];
        this.facial_features = [];
    }
}
const questions = [
    {
        question: "How tall do you look?",
        description: "(This isn’t about how tall you actually are. This is about how tall you look like you are, based on how large or small your head is in comparison to the rest of your body. If you’re having difficulty with this question, try taking a full-body picture of yourself and ask some friends if you look tall, moderate, or short in it.)",
        answers: ["Quite tall", "Slightly tall", "Average height", "Slightly short", "Quite short or petite"]
    },
    {
        question: "What is the shape of your shoulders?",
        description: "(Don’t compare your shoulders to your head, compare them to the rest of your body.)",
        answers: ["Sharp and angular", "Beveled and broad", "Neither very sharp nor very rounded", "Slender and rounded", "Wide and rounded"]
    },
    {
        question: "How long do your arms look?",
        description: "(This is about the bone structure of your arms, so ignore the shape of the flesh on your upper arms.)",
        answers: ["Long and slender", "Long and wide", "Neither long nor short, evenly proportioned", "Short and slender", "Short and wide"]
    },
    {
        question: "How long do your legs look?",
        description: "(This is about the bone structure of your legs, so ignore the shape of the flesh on your thighs.)",
        answers: ["Long and slender", "Long and wide", "Neither long nor short, evenly proportioned", "Short and slender", "Short and wide"]
    },
    {
        question: "What best describes the shape of your hands?",
        description: "",
        answers: ["Long and narrow", "Long and broad", "Not noticeably long or short, evenly proportioned", "Short and narrow", "Short and wide"]
    },
    {
        question: "What best describes the shape of your feet?",
        description: "",
        answers: ["Long and narrow", "Long and wide", "Not noticeably long or short, evenly proportioned", "Small and narrow", "Small and wide"]
    },
    {
        question: "What best describes the shape of your torso*?",
        description: "(This question involves the flesh of the waist, but more importantly it involves the shape of the rib cage, which is why I decided to include it in the bone structure section.)",
        answers: ["Long and narrow, slightly tapered", "Long and wide (could be straight or thick depending on weight)", "Balanced, neither noticeably long nor noticeably short (slightly defined if female)", "Short and narrow (sharply defined if female)", "Short and slightly wide (softly defined if female)"]
    },
    {
        question: "What best describes the shape of your hips*?",
        description: "(This question involves the flesh of the hips, but more importantly it involves the shape of the hipbones, which is why I decided to include it in the bone structure section.)",
        answers: ["Long, narrow, and slightly tapered", "Long and wide (tapering into a V shape if male, or straight if female)", "Balanced, evenly proportioned with the rest of your body", "Short and soft (but slightly narrow)", "Short, soft, and wide"]
    },
    // Facial Bones
    {
        question: "What best describes the shape of your jawline?",
        description: "(Keep in mind the points at the corners of your jawline as well as the shape of your chin.)",
        answers: ["Sharp and angular", "Blunt and wide", "Neither very sharp nor very rounded", "Rounded and slender", "Rounded and softly wide"]
    },
    {
        question: "What best describes the shape of your nose?",
        description: "(It’s important to look at your nose in both profile and front view, as sometimes aquiline noses can appear slightly rounded at the tip when viewed from the front, even though they’re sharp in profile.)",
        answers: ["Long and sharp", "Wide and beveled", "Neither sharp nor rounded, not very small or wide", "Narrow and small", "Rounded, perhaps softly wide"]
    },
    {
        question: "What best describes the shape of your cheekbones?",
        description: "(Ignore what the shape of your cheeks are, and look at only the actual bone structure. The shape of the cheeks will be addressed later. If you’re having difficulty seeing the shape, you may need to feel the shape with your fingers.)",
        answers: ["Prominent and sharp", "Wide and beveled", "Neither very sharp or very rounded", "Narrow and rounded", "Rounded and wide"]
    },
    // Flesh of the Body
    {
        question: "How would you describe your bust, in proportion to the rest of your body?",
        description: "(This question can be skipped.)",
        answers: ["Flat and taut", "Widely spaced, not very prominent", "Balanced, not noticeably small or large", "Fairly large and soft", "Quite prominent"]
    },
    {
        question: "How would you describe the flesh on your upper arms?",
        description: "(If you carry a lot of weight on your arms, you may think the only answers that describe your arms are B or E, but look at the shape of the flesh – is it rounded or straight? And remember to consider your flesh in proportion to the rest of your body.)",
        answers: ["Taut and straight", "Wide and straight", "Balanced, not very taut nor very soft", "Soft and slender", "Soft and wide"]
    },
    {
        question: "How would you describe the flesh on your thighs?",
        description: "(If you carry a lot of weight on your thighs, you may think the only answers that describe your thighs are B or E, but look at the shape of the flesh – is it rounded or straight? And remember to consider your flesh in proportion to the rest of your body.)",
        answers: ["Taut and straight", "Wide and straight", "Balanced, not very taut or very soft", "Soft and slender", "Soft and wide"]
    },
    {
        question: "What best describes the shape of your eyes?",
        description: "",
        answers: ["Straight, and narrow or close-set", "Straight, and long or wide-set", "Not very rounded or straight, not noticeable large or small", "Slightly rounded or upturned", "Large and rounded"]
    },
    {
        question: "What best describes the shape of your lips?",
        description: "",
        answers: ["Thin and angular", "Thin and straight", "Not very full or thin, not very rounded or angular", "Full and slightly angular", "Full and rounded"]
    },
    {
        question: "What best describes the flesh on your cheeks?",
        description: "(Ignore your cheekbones and focus just on the flesh of your face. Smiling can help you determine if your cheeks tend towards angularity or softness.)",
        answers: ["Taut and flat", "Wide and muscular", "Not very soft or tight", "Soft but slender", "Soft and wide, creates a rounded shape"]
    },
];
export function make_questions(parent_element) {
    console.log("Making questions...");
    const questions_form = document.createElement("form");
    parent_element.appendChild(questions_form);
    let q_num = 1;
    for (const question of questions) {
        const question_element = document.createElement("fieldset");
        question_element.id = String("q_num" + q_num);
        questions_form.appendChild(question_element);
        const qh1 = document.createElement("h1");
        qh1.innerText = question.question;
        question_element.appendChild(qh1);
        if (question.description !== undefined) {
            const qdesc = document.createElement("h2");
            qdesc.innerText = question.description;
            question_element.appendChild(qdesc);
        }
        // const qanswers_legend = document.createElement("legend");
        // qanswers_fieldset.appendChild(qanswers_legend);
        let answer_letter_prefix = 65;
        for (const answer of question.answers) {
            let id = UUIDv4();
            // <input type="radio" id="chbx" name="agree" value="Yes!" />
            // <label for="chbx">I agree</label>
            const qanswer_radio = document.createElement("input");
            qanswer_radio.type = "radio";
            qanswer_radio.id = id;
            qanswer_radio.name = "question" + q_num;
            qanswer_radio.value = String.fromCharCode(answer_letter_prefix);
            qanswer_radio.required = true;
            // if (answer_letter_prefix === 65) { // Debug sets all answers to A
            //     qanswer_radio.checked = true;
            // }
            const qanswer_label = document.createElement("label");
            qanswer_label.htmlFor = id;
            qanswer_label.innerText = answer;
            question_element.appendChild(qanswer_radio);
            question_element.appendChild(qanswer_label);
            question_element.appendChild(document.createElement("br"));
            answer_letter_prefix++;
        }
        q_num++;
    }
    const qsubmit = document.createElement("button");
    questions_form.appendChild(qsubmit);
    qsubmit.type = "submit";
    qsubmit.innerText = "Submit";
    questions_form.addEventListener("submit", function (event) {
        event.preventDefault();
        const results = new Results();
        const form_data = new FormData(questions_form);
        console.log(form_data.get("question1"));
        console.log(questions_form.querySelector("#q_num1"));
        for (const entry of form_data) {
            const question_number = entry[0];
            const question_answer = entry[1].toString();
            switch (question_number) {
                case "question1":
                case "question2":
                case "question3":
                case "question4":
                case "question5":
                case "question6":
                case "question7":
                case "question8":
                    results.bone_structure_of_the_body.push(question_answer);
                    break;
                case "question9":
                case "question10":
                case "question11":
                    results.facial_bones.push(question_answer);
                    break;
                case "question12":
                case "question13":
                case "question14":
                    results.flesh_of_the_body.push(question_answer);
                    break;
                case "question15":
                case "question16":
                case "question17":
                    results.facial_features.push(question_answer);
                    break;
                default:
                    console.error("Unrecognized question number: ", question_number);
            }
        }
        display_results(results);
        console.log("results", results);
    });
}
function display_results(results) {
    function p(text) {
        const p = document.createElement("p");
        p.innerText = text;
        return p;
    }
    function d(text, clazz) {
        const d = document.createElement("span");
        d.innerText = text;
        d.className = clazz;
        return d;
    }
    function remove_children(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
        }
    }
    const results_element = document.getElementById("results");
    const overview_element = document.getElementById("overview");
    const bone_structure_of_the_body_element = document.getElementById("bone_structure_of_the_body");
    const facial_bones_element = document.getElementById("facial_bones");
    const flesh_of_the_body_element = document.getElementById("flesh_of_the_body");
    const facial_features_element = document.getElementById("facial_features");
    // Clean old results
    remove_children(overview_element);
    remove_children(bone_structure_of_the_body_element);
    remove_children(facial_bones_element);
    remove_children(flesh_of_the_body_element);
    remove_children(facial_features_element);
    overview_element.appendChild(d(results.bone_structure_of_the_body.join(""), "body_color"));
    overview_element.appendChild(d(results.flesh_of_the_body.join(""), "body_color"));
    overview_element.appendChild(d(results.facial_bones.join(""), "facial_color"));
    overview_element.appendChild(d(results.facial_features.join(""), "facial_color"));
    bone_structure_of_the_body_element.appendChild(p(results.bone_structure_of_the_body.join("")));
    facial_bones_element.appendChild(p(results.facial_bones.join("")));
    flesh_of_the_body_element.appendChild(p(results.flesh_of_the_body.join("")));
    facial_features_element.appendChild(p(results.facial_features.join("")));
    results_element.style.display = "";
}
// Result Rules
// Mostly E -> Romantic
// (Mostly D) || (Mostly [D E] && 4 A+B in body/facial bones) -> Theatrical Romantic
// Mostly A -> Dramatic
// Mostly A -> Dramatic
