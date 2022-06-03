// open cv
function cv()
{
    open('https://drive.google.com/file/d/1ZsTOO_daGED8SMeNxtAHheEA5okXovIq/view?usp=sharing',"_blank");
}

function openLink(url)
{
    open(url,"_blank");
}

// shading nav items
var x = document.querySelectorAll('#mainsections>li>a')
for (let i =0; i< x.length; i++)
{
    x[i].addEventListener("click", ()=>{
        for(let i =0; i< x.length; i++)
        {
            x[i].classList.remove("activee");
        }

        x[i].classList.add("activee");
    })
}


