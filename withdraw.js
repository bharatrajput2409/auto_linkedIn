let btns = document.querySelectorAll('.invitation-card button')
let can_withdraw = (btn)=>new Promise((resolve,reject)=>{
    let temp = setInterval(()=>{
        if(btn.disabled ===false){
            clearInterval(temp);
            resolve(true);
        }
    },500)
})
let is_withdraw_dialog_open = ()=>new Promise((resolve,reject)=>{
    let temp = setInterval(()=>{
        if(document.querySelectorAll('.artdeco-modal__confirm-dialog-btn').length!==0){
            clearInterval(temp);
            resolve(true);
        }
    },300)
})
async function temp(){
    for(let i =0; i<btns.length;i++){
        await can_withdraw(btns[i])
        btns[i].click();
        await is_withdraw_dialog_open()
        document.querySelectorAll('.artdeco-modal__confirm-dialog-btn')[1].click();
    }   
}
temp();
