// ===== Car Insurance Price Calculator =====

// قیمت پایه‌ی هر خودرو (بر حسب دلار) — ماشین گران‌تر، بیمه‌ی گران‌تر
const BASE_PRICE = {
  "ford mustang": 800,
  "mazda rx7": 650,
  "nissan r32": 700,
  "toyota supra mk7": 900,
  "bmw e46": 750,
  "rolls royce phantom": 2500,
};

// عناصر صفحه
const carModel = document.querySelector("#carModel");
const carYear = document.querySelector("#carMadeYear");
const basic = document.querySelector("#basic");
const complete = document.querySelector("#complete");
const form = document.querySelector("form");
const resultSection = document.querySelector(".paymentResault");

// ۱) پرکردن لیست سال ساخت (از امسال تا ۳۵ سال قبل)
(function fillYears() {
  const now = new Date().getFullYear();
  for (let year = now; year >= now - 35; year--) {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    carYear.appendChild(opt);
  }
})();

// ۲) محاسبه‌ی قیمت
function calculatePrice() {
  const model = carModel.value;
  const year = Number(carYear.value);
  const base = BASE_PRICE[model] || 700;

  // هرچه خودرو قدیمی‌تر، قطعات کمیاب‌تر → ضریب کمی بیشتر برای سن بالا
  const age = new Date().getFullYear() - year;
  const ageFactor = 1 + age * 0.015; // هر سال ۱.۵٪

  // نوع بیمه: پایه ضریب ۱، کامل (بدنه) ضریب ۱.۸
  let typeFactor = 1;
  let typeLabel = "basic";
  if (complete.checked) {
    typeFactor = 1.8;
    typeLabel = "complete (with body insurance)";
  } else if (basic.checked) {
    typeFactor = 1;
    typeLabel = "basic";
  }

  const price = Math.round(base * ageFactor * typeFactor);
  return { model, year, typeLabel, price };
}

// ۳) نمایش نتیجه
function showResult(e) {
  e.preventDefault(); // جلوی رفرش صفحه

  // حداقل یک نوع بیمه باید انتخاب شده باشد
  if (!basic.checked && !complete.checked) {
    resultSection.innerHTML =
      '<p class="error">⚠ Please select an insurance type.</p>';
    return;
  }

  const { model, year, typeLabel, price } = calculatePrice();

  resultSection.innerHTML = `
    <div class="resultCard">
      <h3>Your Insurance Quote</h3>
      <p><strong>Car:</strong> ${model} (${year})</p>
      <p><strong>Type:</strong> ${typeLabel}</p>
      <p class="price">$${price.toLocaleString()}</p>
    </div>
  `;
}

// ۴) اتصال فرم
form.addEventListener("submit", showResult);

// فقط یکی از چک‌باکس‌ها همزمان فعال باشد (basic یا complete)
basic.addEventListener("change", () => {
  if (basic.checked) complete.checked = false;
});
complete.addEventListener("change", () => {
  if (complete.checked) basic.checked = false;
});
