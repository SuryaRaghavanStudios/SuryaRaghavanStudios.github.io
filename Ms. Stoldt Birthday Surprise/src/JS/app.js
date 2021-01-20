const name = prompt("What's your name?", "");
const passwords = {
  stoldtPasswords: {
    stoldt1: "Mrs. Stoldt",
    stoldt2: "Ms. Stoldt",
    stoldt3: "Elena Stoldt",
    stoldt4: "Elena Hartmann",
    stoldt5: "Mrs. Hartmann",
    stoldt6: "Ms. Hartmann",
  },
  studentPasswords: {
    student1: "RT",
    student2: "SR",
  },
};

if (
  name === passwords.stoldtPasswords.stoldt1 ||
  name === passwords.stoldtPasswords.stoldt2 ||
  name === passwords.stoldtPasswords.stoldt3 ||
  name === passwords.stoldtPasswords.stoldt4 ||
  name === passwords.stoldtPasswords.stoldt5 ||
  name == passwords.stoldtPasswords.stoldt6 ||
  name === passwords.studentPasswords.student1 ||
  name === passwords.studentPasswords.student2
) {
  if (name === passwords.studentPasswords.student2) {
    alert(`Access Granted, Surya Raghavan! ✔✔✔`);
  } else if (name === passwords.studentPasswords.student1) {
    alert(`Access Granted, Rakshania Thomas! ✔✔✔`);
  } else {
    alert(`Access Granted, ${name}! ✔✔✔`);
  }
} else {
  alert("Access Denied! ❌❌❌");
  window.location.href = "../HTML/access_denied.html";
}
