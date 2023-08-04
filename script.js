function plano1(){
  var baixo = document.querySelector('#baixo1')
  var cima = document.querySelector('#cima1')
  var info = document.querySelector('#planos')

  if(baixo.style.display == 'none'){
    baixo.style.display = 'flex'
    cima.style.display = 'none'
    info.style.display = 'none'
  }
  else{
    baixo.style.display = 'none'
    cima.style.display = 'flex'
    info.style.display = 'block'
  }
}

function plano2(){
  var baixo = document.querySelector('#baixo2')
  var cima = document.querySelector('#cima2')
  var info = document.querySelector('#planos2')

  if(baixo.style.display == 'none'){
    baixo.style.display = 'flex'
    cima.style.display = 'none'
    info.style.display = 'none'
  }
  else{
    baixo.style.display = 'none'
    cima.style.display = 'flex'
    info.style.display = 'block'
  }
}

function plano3(){
  var baixo = document.querySelector('#baixo3')
  var cima = document.querySelector('#cima3')
  var info = document.querySelector('#planos3')

  if(baixo.style.display == 'none'){
    baixo.style.display = 'flex'
    cima.style.display = 'none'
    info.style.display = 'none'
  }
  else{
    baixo.style.display = 'none'
    cima.style.display = 'flex'
    info.style.display = 'block'
  }
}

function menu(){
  var body = document.querySelector('body')
  var menu = document.querySelector('#climenu')
  var sair = document.querySelector('#clisair')
  var itens = document.querySelector('menu')
  var main = document.querySelector('main')
  var header = document.querySelector('header')
  var criacao = document.querySelector('#criacao')
  var social = document.querySelector('.social')
  var fechar = document.querySelector('#fechar')
  var menuNome = document.querySelector('#menu')
  var logo = document.querySelector('#logo')

  if(menu.style.display == 'none'){
    sair.style.display = 'none'
    menu.style.display = 'inline-block'
    body.style.background = 'white'
    itens.style.display = 'none'
    main.style.display = 'block'
    header.style.display = 'block'
    criacao.style.display = 'block'
    social.style.display = 'none'
    fechar.style.display = 'none'
    menuNome.style.display = 'flex'
    logo.style.display = 'none'
  }
  else{
    sair.style.display = 'block'
    menu.style.display = 'none'
    body.style.background = 'linear-gradient(90deg, rgba(73, 61, 166, 0.96) 0%, rgba(103, 110, 164, 0.96) 100%)'
    itens.style.display = 'block'
    main.style.display = 'none'
    header.style.display = 'none'
    criacao.style.display = 'none'
    social.style.display = 'inline-block'
    fechar.style.display = 'flex'
    menuNome.style.display = 'none'
    logo.style.display = 'inline'
    logo.style.position = 'absolute'
    logo.style.bottom = '-19px'
    logo.style.left = '280px'
  }
}