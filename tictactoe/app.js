function restart()
{
    ending.style.display='block';
        result.style.display='none';
    activeplayer=0;
    winner=0;
    let index=0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            gamefield[i][j]=0;
            gamefields[index].textContent='';
            gamefields[index].classList.remove('active-disable');
            index++;
        }
    }
}
function start()
{
    if(!player[0].name&&!player[1].name)
    {
        alert('Enter the name of the both the players');
        return ;
    }
    if(winner>0)
    {
        let reset=restart();
    }
    active.style.display='block';
    activeplayername.textContent=player[activeplayer%2].name;
}
function selectedfield(event)
{
    if(!event.target.textContent){ 
    event.target.textContent=player[activeplayer%2].Symbol;
    activeplayername.textContent=player[(activeplayer+1)%2].name;
    
    let selectedrow=event.target.dataset.row-1;
    let selectedcol=event.target.dataset.col-1;
    gamefield[selectedrow][selectedcol]=activeplayer%2+1;

    winner=checkinggameover();
      if(winner==1)
      {
        ending.style.display='none';
        result.style.display='block';
        winnername.textContent=player[0].name;
      }
      else if(winner==2)
      {
        ending.style.display='none';
        result.style.display='block';
        winnername.textContent=player[1].name;
      }

    activeplayer++;
    event.target.classList.add('active-disable');
   
    
    }
}
function checkinggameover()
{
    for(let i=0;i<=2;i++)
    {
        if(gamefield[0][i]>0&&gamefield[0][i]===gamefield[1][i]&&gamefield[0][i]===gamefield[2][i])
        return gamefield[0][i];
    }
    for(let i=0;i<=2;i++)
    {
        if(gamefield[i][0]>0&&gamefield[i][0]===gamefield[i][1]&&gamefield[i][0]===gamefield[i][2])
        return gamefield[i][0];
    }
    if(gamefield[0][0]>0&&gamefield[0][0]===gamefield[1][1]&&gamefield[0][0]===gamefield[2][2])
    return gamefield[0][0];

    if(gamefield[0][2]>0&&gamefield[0][2]===gamefield[1][1]&&gamefield[0][2]===gamefield[2][0])
    return gamefield[0][2];

    return 0;
    
}