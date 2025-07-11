  function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // set birts date
  const birthDate = '1985-12-10'; // format YYYY-MM-DD
  const age = calculateAge(birthDate);
  document.getElementById('profile-age').textContent =  age + ' years old';