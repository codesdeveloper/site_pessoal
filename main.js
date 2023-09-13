

const projetos = [
    { name: 'land-page', tech: ['javascript', 'css'], description: 'Página Front-End Land Page responsiva com designer estético', date: '11 de janeiro de 2023' },
    { name: 'youtube-clone', tech: ['javascript', 'css'], description: 'Clone da página inicial do Youtube, Projeto Front-End básico', date: '30 de abril de 2023' },
    { name: 'star_bucks', tech: ['javascript', 'css'], description: '-', date: '-' },
    { name: 'super-mario', tech: ['html', 'css', 'javascript'], description: '-', date: '-' },
    { name: 'pokedex', tech: ['html', 'css'], description: '-', date: '-' },
    { name: 'todolist', tech: ['html', 'css', 'javascript', 'firebase'], description: '-', date: '-' },
    { name: 'modelo_portfolio-1', tech: ['html', 'css'], description: '-', date: '-' },
    { name: 'agencia-bold', tech: ['html', 'css'], description: '-', date: '-' },
    { name: 'calendario-react', tech: ['html', 'css', 'javascript', 'react'], description: '-', date: '-' },
    { name: 'site_pessoal', tech: ['html', 'css', 'javascript', 'php'], description: '-', date: '-' },
    { name: 'modelo_portfolio-2', tech: ['html', 'css', 'javascript'], description: '-', date: '-' },
    { name: 'tarefas_nodejs', tech: ['html', 'css', 'nodejs'], description: '-', date: '-' },
    { name: 'anotacoes_react', tech: ['html', 'javascript', 'css', 'react'], description: '-', date: '-' },
    { name: 'animation', tech: ['html', 'css'], description: '-', date: '-' },
    { name: 'rede_social', tech: ['html', 'css', 'javascript', 'react', 'firebase'], description: '-', date: '-' },
    { name: 'mundo-3d', tech: ['html', 'javascript'], description: '-', date: '-' },
    { name: 'clone-drive', tech: ['html', 'css', 'javascript', 'react', 'firebase'], description: '-', date: '-' },
    { name: 'front-end_materialize', tech: ['html', 'css', 'materialize'], description: '-', date: '-' },
    { name: 'front-end_bootstrap', tech: ['html', 'css', 'bootstrap'], description: '-', date: '-' },
    { name: 'restaurante_coronel', tech: ['html', 'css', 'javascript', 'firebase'], description: '-', date: '-' },
    { name: 'notification_push', tech: ['html', 'css', 'javascript'], description: '-', date: '-' },
];
var html = '';

projetos.forEach(n => {
    html += `<li><a href='#' id="${n.name}">
    <img src='imgs/projetos/${n.name}.png'>
    <div class="wp"><span>${n.name}</span><ul>`
    n.tech.forEach(e => html += `<li>${e}</li>`);
    html += `</ul></div></a></li>`;
})

$('.portfolio_box').html(html);

let up = function (str) {
    let str2 = str.replace('-', ' ').replace('_', ' ');
    let arr = str2.split(' ');
    return arr[0][0].toUpperCase() + arr[0].substr(1) + ' ' + (arr.length > 1 ? arr[1][0].toUpperCase() + arr[1].substr(1) : '') + ' ' + (arr.length > 2 ? arr[2][0].toUpperCase() + arr[2].substr(1) : '');
}


window.onload = () => {
    $('.animation').hide();
    $('.container').show();
    document.getElementById('bg-video').play();

    /*
    let width = window.outerWidth;
    let lis = $('.certificados_box li');
    let grups = [];
    let pos = 0;

    let ind = 0;
    let stop = false;
    while (ind < lis.length - 10) {

        let item = [];

        for (let i = 0; i < 10; ++i) {
            let obj = lis[ind];
            ++ind
            if (obj == null) break;
            item.push(obj.outerHTML)
        }
        grups.push(item);
    }

    /*
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
    */

    /*$('.certificados_expand i, .certificados_expand > .bg').click(() => {
        $('.certificados_expand').css('display', 'none').find('img').attr('src', '');
        $('html').css('overflow', 'auto')
    });*/

    $('.menu-desktop .l-home').css('color', '#f0f')
    $(window).on('scroll', () => {
        $('.menu-desktop a').css('color', '#fff')

        let scrollY = window.pageYOffset + 10;
        let sobre = $('section#sobre')[0];
        let conhecimentos = $('section#conhecimentos')[0];
        let certificados = $('section#certificados')[0];
        let portfolio = $('section#portfolio')[0];
        let servicos = $('section#servicos')[0];
        let contato = $('section#contato')[0];

        if (scrollY < sobre.offsetTop) $('.l-home').css('color', '#f0f');
        else if (scrollY < conhecimentos.offsetTop) $('.l-sobre').css('color', '#f0f');
        else if (scrollY < certificados.offsetTop) $('.l-conhecimentos').css('color', '#f0f');
        else if (scrollY < portfolio.offsetTop) $('.l-certificados').css('color', '#f0f');
        else if (scrollY < servicos.offsetTop) $('.l-portfolio').css('color', '#f0f');

        else if (scrollY < contato.offsetTop) $('.l-servicos').css('color', '#f0f');
        else $('.l-contato').css('color', '#f0f');

    })

    $('.portfolio_details .close').click(() => {
        $('.portfolio_details').css('display', 'none');
         $('body').css('overflow', 'visible');
    })

    $('.portfolio_box li a').click((e) => {
        e.preventDefault()
        var target = e.currentTarget;
        var id = target.id;
         $('.portfolio_details').css('display', 'flex');
         $('body').css('overflow', 'hidden');


         projetos.forEach(n => {
            if(n.name != id)return;
            $('.portfolio_details h1').text(up(n.name));
            var t = '';
            n.tech.forEach(e => t += `<li>${e}</li>`);
            $('.portfolio_details .box .right ul').html(t);
            $('.portfolio_details .box .right p').text(n.description);
            $('.portfolio_details .box .left video').attr('src', `https://leandros8.github.io/${n.name}/video_tela.mp4`);
            
            $('.portfolio_details .box .right .date').text(n.date);
            $('.portfolio_details .box .right .footer .git').attr('href', `https://github.com/leandros8/${n.name}`);
            $('.portfolio_details .box .right .footer .link').attr('href', `https://leandros8.github.io/${n.name}`);

            $('.portfolio_details .box .right .date').text(n.date);
        })
        
        
    })

}