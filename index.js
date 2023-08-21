import './style.css';

// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
window.onload = function() {
  var button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function() {
    var height = document.getElementById('bodyHeight').value;
    var weight = document.getElementById('bodyWeight').value;
    
    if(height === '' || weight === '') {
      alert('請輸入身高和體重');
      return;
    }
  
    // 身高從公分轉換為公尺
    height = height / 100;
    
    // 計算 BMI
    var bmi = weight / (height * height);
    
    // 將計算結果顯示在網頁上
    document.getElementById('resultText').innerText = bmi.toFixed(2);
  });
}