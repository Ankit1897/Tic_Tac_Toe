function editname(event)
{
    selectedplayer=event.target.dataset.playerid;
    
    input.focus;
    change1.style.display='block';
    change2.style.display='block';
   
   
}
function edited()
{
    change1.style.display='none';
    change2.style.display='none';
    input.classList.remove('error');
    inputerror.innerText="";

}
function submited(e) {
    e.preventDefault();

    input.value.trim();
    if(!input.value)
    {
             input.classList.add('error');
             inputerror.innerText="Write a Valid Name !";
    }
    else
    {
         if(selectedplayer=="1")
         {
            let playerid=document.getElementById('player-1 name');
            playerid.innerText=input.value;
            player[0].name=input.value;
         }
         else{
            let playerid=document.getElementById('player-2 name');
            playerid.innerText=input.value;
            player[1].name=input.value;
         }
         input.value="";
        edited();
        
    }

}