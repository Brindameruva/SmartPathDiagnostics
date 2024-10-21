function diagnose() {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    let result = '';

    if (symptoms.includes("headache")) {
        result = "Possible diagnosis: Migraine or Tension Headache.";
    } else if (symptoms.includes("fever")) {
        result = "Possible diagnosis: Flu or Infection.";
    } else if (symptoms.includes("cough")) {
        result = "Possible diagnosis: Common Cold or Pneumonia.";
    } else if (symptoms.includes("sore throat")) {
        result = "Possible diagnosis: Strep Throat or Tonsillities.";
    } else if (symptoms.includes("chest pain")) {
        result = "Possible diagnosis: Angina or GERD or Costochondritis.";
    } else if (symptoms.includes("shortness of breath")) {
        result = "Possible diagnosis: Asthma or COPD.";
    } else if (symptoms.includes("nausea"||"vomiting")) {
        result = "Possible diagnosis: Food Poisoning or Stomach Flu or Migraine.";
    } else if (symptoms.includes("stomach Pain")) {
        result = "Possible diagnosis: Appendicitis or Gallstones or Peptic Ulcer.";
    } else if (symptoms.includes("joint pain")) {
        result = "Possible diagnosis: Arthritis or Tendinitis.";
    } else if (symptoms.includes("fatigue")) {
        result = "Possible diagnosis: Anemia or Sleep Apnea.";
    } else {
        result = "Please provide more specific symptoms for a diagnosis.";
    }

    document.getElementById("result").innerText = result;
}
