function open_menu()
{
    var navbar=document.getElementById("navbar");
    var figcaption=document.getElementsByClassName("figcaption_default");


    if (navbar.className=="navbar_closes" || navbar.className=="navdefault")
    {
        navbar.className="navbar_opens";
        // Cambio el figcaption pero la verdad que no le pude hacer el efecto aún bien
        figcaption.className="figcaption_opens";
    }
    else
    {
        navbar.className="navbar_closes";
        figcaption.className="figcaption_closes";
    }
    
}

function cambiar_cont1()
{
    var navbar=document.getElementById("navbar");
    var section_cont1=document.getElementById("contenido1");
    var section_cont2=document.getElementById("contenido2");

    section_cont1.style.display="block";
    section_cont2.style.display="none";
    // Finally i turn the navbar to it's default state after the click so it dissapears!
    navbar.className="navdefault";
}

function cambiar_cont2()
{
    var navbar=document.getElementById("navbar");
    var section_cont1=document.getElementById("contenido1");
    var section_cont2=document.getElementById("contenido2");

    section_cont2.style.display="block";
    section_cont1.style.display="none";
    navbar.className="navdefault";
}

