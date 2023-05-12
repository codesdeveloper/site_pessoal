window.onload = () => {

    document.getElementById('bg-video').play();
    
    let width = window.outerWidth;
    let lis = $('.certificados_box li');
    let grups = [];
    let pos = 0;

    let ind = 0;
    let stop = false;
    while (ind < lis.length-10) {

        let item = [];

        for (let i = 0; i < 10; ++i) {
            let obj = lis[ind];
             ++ind
            if (obj == null) break;
            item.push(obj.outerHTML)
        }
        grups.push(item);
    }


    function update() {
        $('.certificados_box ul').animate({ opacity: '1' }, 200);
        $('.certificados_box ul').html(`<div>${grups[pos]}</div>`);
        let carousel = '';
        for (let i = 0; i < grups.length; i++)
            carousel += `<input ${i == pos ? 'checked' : ''} id="ind${i}" name="ind" type="radio"><label for="ind${i}"></label>`;
        $('.certificados_box .carousel').html(carousel);

        $('.certificados_box li').click((e) => {
            let src = $(e.currentTarget).find('img').attr('src');
            $('.certificados_expand').css('display', 'flex').find('img').attr('src', src);
            $('html').css('overflow', 'hidden')
        });
    } update();

    function next() {
        if (pos == grups.length - 1) pos = 0;
        else pos++;

        $('.certificados_box ul').animate({ left: '-100%', opacity: '0' }, 500, () => {
            $('.certificados_box ul').css({ left: '0' });
            update();
        });
    }

    $('.prev').on('click', () => {
        if (pos == 0) pos = grups.length - 1;
        else pos--;
        $('.certificados_box ul').animate({ left: '100%', opacity: '0' }, 500, () => {
            $('.certificados_box ul').css({ left: '0' });
            update();
        });
    });

    $('.next').on('click', next);

    setInterval(() => {
       // next();
    }, 5000);

    if (width >= 1450) {
        let ind = 0;


        setInterval(() => {



        }, 2000);
    }

    if (width >= 1200) {

    }


    //input[type=radio]:checked

    $('.certificados_expand i, .certificados_expand > .bg').click(() => {
        $('.certificados_expand').css('display', 'none').find('img').attr('src', '');
        $('html').css('overflow', 'auto')
    });

    $('.menu-desktop .l-home').css('color', '#f0f')
    $(window).on('scroll', () => {
        $('.menu-desktop a').css('color', '#fff')

        let scrollY = window.pageYOffset + 10;
        let sobre = $('section#sobre')[0];
        let conhecimentos = $('section#conhecimentos')[0];
        let certificados = $('section#certificados')[0];
        let portfolio = $('section#portfolio')[0];
        let artigos = $('section#artigos')[0];
        let eventos = $('section#eventos')[0];
        let voluntarios = $('section#voluntarios')[0];
        let servicos = $('section#servicos')[0];
        let contato = $('section#contato')[0];
        let curriculo = $('section#curriculo')[0];

        if (scrollY < sobre.offsetTop) $('.l-home').css('color', '#f0f');
        else if (scrollY < conhecimentos.offsetTop) $('.l-sobre').css('color', '#f0f');
        else if (scrollY < certificados.offsetTop) $('.l-conhecimentos').css('color', '#f0f');
        else if (scrollY < portfolio.offsetTop) $('.l-certificados').css('color', '#f0f');
        else if (scrollY < artigos.offsetTop) $('.l-portfolio').css('color', '#f0f');
        else if (scrollY < eventos.offsetTop) $('.l-artigos').css('color', '#f0f');
        else if (scrollY < voluntarios.offsetTop) $('.l-eventos').css('color', '#f0f');
        else if (scrollY < servicos.offsetTop) $('.l-voluntarios').css('color', '#f0f');
        else if (scrollY < contato.offsetTop) $('.l-servicos').css('color', '#f0f');
        else if (scrollY < curriculo.offsetTop) $('.l-contato').css('color', '#f0f');
        else $('.l-curriculo').css('color', '#f0f');

    })

}