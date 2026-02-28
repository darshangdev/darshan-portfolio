// theme
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
  document.body.classList.toggle("dark");
  toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
};

// reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-80){
      el.classList.add("visible");
    }
  });
});

// modal
const data={
  playwright:"Built scalable Playwright automation across MPOS & MySpot reducing regression time.",
  perf:"Designed JMeter performance suite identifying booking & payment bottlenecks.",
  cicd:"Integrated automation into CI/CD enabling shift-left QA."
};

function openModal(id){
  document.getElementById("modalTitle").textContent=id.toUpperCase();
  document.getElementById("modalText").textContent=data[id];
  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}
