// อ้างอิงไปยัง Firebase Authentication
var auth = firebase.auth();

// ตรวจสอบสถานะการเข้าสู่ระบบเมื่อโหลดหน้า
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById('appDiv').style.display = 'block';
  } else {
    document.getElementById('loginDiv').style.display = 'block';
    document.getElementById('appDiv').style.display = 'none';
  }
});

// การจัดการการเข้าสู่ระบบ
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error-message');

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // เข้าสู่ระบบสำเร็จ
      document.getElementById('loginDiv').style.display = 'none';
      document.getElementById('appDiv').style.display = 'block';
    })
    .catch((error) => {
      // เกิดข้อผิดพลาดในการเข้าสู่ระบบ
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'มีข้อผิดพลาด กรุณาใส่อีเมลและรหัสผ่านใหม่';
    });
});

// การจัดการการออกจากระบบ
document.getElementById('logoutButton').addEventListener('click', function () {
  auth.signOut().then(() => {
    // ออกจากระบบสำเร็จ
    document.getElementById('loginDiv').style.display = 'block';
    document.getElementById('appDiv').style.display = 'none';
  });
});

// การจัดการการค้นหาวันที่
document.getElementById('dateRangeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // ตรวจสอบสถานะการเข้าสู่ระบบอีกครั้งก่อนทำการค้นหา
  var user = auth.currentUser;
  if (!user) {
    document.getElementById('loginDiv').style.display = 'block';
    document.getElementById('appDiv').style.display = 'none';
    return;
  }

  var fromDate = document.getElementById('fromDate').value;
  var toDate = document.getElementById('toDate').value;
  // ค้นหาข้อมูลจาก Firestore ตามวันที่
});

// การจัดการการค้นหาลูกค้า
document.getElementById('customerSearchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // ตรวจสอบสถานะการเข้าสู่ระบบอีกครั้งก่อนทำการค้นหา
  var user = auth.currentUser;
  if (!user) {
    document.getElementById('loginDiv').style.display = 'block';
    document.getElementById('appDiv').style.display = 'none';
    return;
  }

  var customerId = document.getElementById('customerId').value;
  // ค้นหาข้อมูลจาก Firestore ตาม Customer ID
});

// การจัดการการเปิดและปิดโมดัล
var modal = document.getElementById("modal");
var btn = document.getElementById("fuelTypeButton");
var span = document.getElementsByClassName("close")[0];
var selectedFuelType = document.getElementById("selectedFuelType");

// เมื่อกดปุ่ม เลือกประเภทน้ำมัน จะเปิดโมดัล
btn.onclick = function() {
  modal.style.display = "block";
}

// เมื่อกดปุ่ม x (close) จะปิดโมดัล
span.onclick = function() {
  modal.style.display = "none";
}

// เมื่อกดบริเวณนอกโมดัล จะปิดโมดัล
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ตัวอย่างประเภทน้ำมัน
var fuelTypes = ["ดีเซล", "เบนซิน", "แก๊สโซฮอล์ 91", "แก๊สโซฮอล์ 95"];

// แสดงประเภทน้ำมันในโมดัล
var fuelTypeList = document.getElementById("fuelTypeList");
fuelTypes.forEach((type) => {
  var li = document.createElement("li");
  li.textContent = type;
  li.onclick = function() {
    selectedFuelType.textContent = "ประเภทน้ำมันที่เลือก: " + type;
    modal.style.display = "none";
  };
  fuelTypeList.appendChild(li);
});
