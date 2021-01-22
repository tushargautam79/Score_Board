var total=5;
var p=25;
var mat1="Team 1";
var mat2="Team 2";
var m=0;
var pt1=0;
var pt2=0;
var end1=null;
var end2=null;
var name1=document.querySelector("#name1");
var name2=document.querySelector("#name2");
var form=document.querySelector("#form");
var button=document.querySelector("#button");
var display=document.querySelector("#total");
var player1=document.querySelector("#player1");
var player2=document.querySelector("#player2");
var score1=document.querySelector("#score1");
var score2=document.querySelector("#score2");
var reset=document.querySelector("#reset");
name1.addEventListener("click",function()
{
  if((pt1=='0')&&(pt2=='0'))
  	{
    	var mat =prompt("Enter the Name of 1st team");
    	name1.innerText= mat;
    	mat1=mat;
  	}
});
name2.addEventListener("click",function()
{
  if((pt1=='0')&&(pt2=='0'))
  	{
    	var mat =prompt("Enter the Name of 2nd team");
    	name2.innerText= mat;
    	mat2=mat;
  	}
});
button.addEventListener("click",function()
	{
		var mat=Number(form.value);
		if(mat<=0)
		{
			alert("Number Cant be Negative/Empty/Zero");
		}
		else
		{
			total=mat;
			display.innerText="Winning Points -"+mat;
			display.style.color="red";
			display.style.fontSize="30px";
			display.style.background="black";
			display.style.fontWeight="bold";
			display.style.textalign="end";
		}

	});
player1.addEventListener("click",function()
{
	pt1=pt1+1
	if((pt1<=total)&&(pt2<total))
	{
		score1.innerText=pt1;
		if(pt1==total)
		{
			display.innerText="Winner is--"+mat1;
			display.style.color="red";
			display.style.fontSize="30px";
			display.style.background="black";
			display.style.fontWeight="bold";
			display.style.textalign="end";
			end1=setInterval(function(){
				name1.style.color="red";
				name1.style.background="black";
				{
					if(p%13==0)
					{
						name1.style.color="gray";
						p++;
					}
					else if(p%17==0)
					{
						name1.style.color="orange";
						p++;
					}
					else if(p%19==0)
					{
						p++;
						score1.style.color="purple";
					}
					else
					{
						p++;
						score1.style.color="green";
					}
				}

				if(m%19==0)
				{
	  			score1.style.background="blue";
				}
				else if (m%13==0)
				{
				score1.style.background="red";
				}
				else if(m%17==0)
				{
				score1.style.background="green";
				}
				else
				score1.style.background="#F08080"
				m++;

				},40);
		}
		else if(pt1>pt2)
		{
			score1.style.background="red";
			score2.style.background="white";
		}
		else if(pt1<pt2)
		{
			score2.style.background="red";
			score1.style.background="white";
		}
		else
		{

		}

	}
	

});
player2.addEventListener("click",function()
{
	pt2=pt2+1
	if((pt2<=total)&&(pt1<total))
	{
		score2.innerText=pt2;
		if(pt2==total)
		{
			display.innerText="Winner is--"+mat2;
			display.style.color="red";
			display.style.fontSize="30px";
			display.style.background="black";
			display.style.fontWeight="bold";
			display.style.textalign="end";

			end2=setInterval(function(){
				name2.style.color="red";
				name2.style.background="black";
				{
					if(p%13==0)
					{
						name2.style.color="gray";
						p++;
					}
					else if(p%17==0)
					{
						name2.style.color="orange";
						p++;
					}
					else if(p%19==0)
					{
						p++;
						score2.style.color="purple";
					}
					else
					{
						p++;
						score2.style.color="green";
					}
				}

				if(m%19==0)
				{
	  			score2.style.background="blue";
				}
				else if (m%13==0)
				{
				score2.style.background="red";
				}
				else if(m%17==0)
				{
				score2.style.background="green";
				}
				else
				score2.style.background="#F08080"
				m++;

				},40);
		}
		else if(pt1>pt2)
		{
			score1.style.background="red";
			score2.style.background="white";
		}
		else if(pt1<pt2)
		{
			score2.style.background="red";
			score1.style.background="white";
		}
		else
		{

		}

	}
	

});
reset.addEventListener("click",function()
{
	display.innerText="Match Restarted";
	total=5;
	pt1=0;
	pt2=0;
	score1.innerText=0;
	score2.innerText=0;
	name2.innerText="Team 2";
	name1.innerText="Team 1";
	score1.style.background="white";
	score2.style.background="white";
	name1.style.background="white";
	name2.style.background="white";
	clearInterval(end1);
	clearInterval(end2);
})


