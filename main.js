const songitem =
    [
        {
            id: '01_dan',
            songName: `Dandelion <br>
            <p>Ruth B.</p>`,
            poster: 'photos/01_dan.jpg',
        },

        {
            id: '02_snap',
            songName: `SNAP <br>
            <p>Sona Linn</p>`,
            poster: 'photos/02_snap.jpg'
        },

        {
            id: '03_thou',
            songName: `A Thousand Years <br>
            <p>Christiana Perri</p>`,
            poster: 'photos/03_thou.jpg'
        },

        {
            id: '04_love',
            songName: `Love Story <br>
            <p>Tylor Swift</p>`,
            poster: 'photos/04_love.jpg'
        },

        {
            id: '05_shape',
            songName: `Shape of You <br>
              <p>Ed Sheeran</p>`,
            poster: 'photos/05_shape.jpg'
        },

        {
            id: '06_intension',
            songName: `Intesnion<br>
        <p>Justine Bieber</p>`,
            poster: 'photos/06_intension.jpg'
        },

        {
            id: '07_sorry',
            songName: `Sorry<br>
        <p>Justin Bieber</p>`,
            poster: 'photos/07_sorry.jpg'
        },

        {
            id: '08_un',
            songName: `Unforgettable <br>
        <p>French Monthana</p>`,
            poster: 'photos/08_un.jpg'
        },
    ]

const songitem2 =
    [
        {
            id: '11_we',
            songName: `We Don't Talk <br>
            <p>Charlie Puth</p>`,
            poster: 'photos/11_we.jpg',
        },

        {
            id: '12_friends',
            songName: `FRIENDS <br>
            <p>Marshmello</p>`,
            poster: 'photos/12_friends.jpg'
        },

        {
            id: '13_what',
            songName: `What if (I told) <br>
            <p>Jhony Ornaldo</p>`,
            poster: 'photos/13_what.jpg'
        },

        {
            id: '14_selfish',
            songName: `Selfish Love <br>
            <p>DJ Snake</p>`,
            poster: 'photos/14_selfish.jpg'
        },

        {
            id: '15_baby',
            songName: `Baby <br>
              <p>Justin Beiber</p>`,
            poster: 'photos/15_baby.jpg'
        },

        {
            id: '16_chaleya',
            songName: `Chaleya<br>
        <p>Arijit Singh</p>`,
            poster: 'photos/16_chaleya.jpg'
        },

        {
            id: '17_stay',
            songName: `STAY<br>
        <p>The Kid LAROI</p>`,
            poster: 'photos/17_stay.jpg'
        },

        {
            id: '18_yummy',
            songName: `Yummy <br>
        <p>Justin Bieber</p>`,
            poster: 'photos/18_yummy.jpg'
        },

        {
            id: '19_let',
            songName: `Let Me Love You <br>
        <p>Justin Bieber</p>`,
            poster: 'photos/19_let.jpg'
        },

        {
            id: '20_maiya',
            songName: `Maiya Mennu <br>
        <p>Sachet Tandon</p>`,
            poster: 'photos/20_maiya.jpg'
        },

        {
            id: '21_kaise',
            songName: `Kaise Hua <br>
        <p>Vishal Mishra</p>`,
            poster: 'photos/21_kaise.jpg'
        },
    ]



Array.from(document.getElementsByClassName('musiclist')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songitem[i].poster;
    element.getElementsByTagName('h4')[0].innerHTML = songitem[i].songName;

    element.getElementsByTagName('img')[1].src = songitem[i + 1].poster;

    element.getElementsByTagName('h4')[1].innerHTML = songitem[i + 1].songName;

    element.getElementsByTagName('img')[2].src = songitem[i + 2].poster;
    element.getElementsByTagName('h4')[2].innerHTML = songitem[i + 2].songName;

    element.getElementsByTagName('img')[3].src = songitem[i + 3].poster;
    element.getElementsByTagName('h4')[3].innerHTML = songitem[i + 3].songName;

    element.getElementsByTagName('img')[4].src = songitem[i + 4].poster;
    element.getElementsByTagName('h4')[4].innerHTML = songitem[i + 4].songName;

    element.getElementsByTagName('img')[5].src = songitem[i + 5].poster;
    element.getElementsByTagName('h4')[5].innerHTML = songitem[i + 5].songName;

    element.getElementsByTagName('img')[6].src = songitem[i + 6].poster;
    element.getElementsByTagName('h4')[6].innerHTML = songitem[i + 6].songName;

    element.getElementsByTagName('img')[7].src = songitem[i + 7].poster;
    element.getElementsByTagName('h4')[7].innerHTML = songitem[i + 7].songName;
})

Array.from(document.getElementsByClassName('box')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songitem2[i].poster;
    element.getElementsByTagName('h4')[0].innerHTML = songitem2[i].songName;

    element.getElementsByTagName('img')[1].src = songitem2[i + 1].poster;
    element.getElementsByTagName('h4')[1].innerHTML = songitem2[i + 1].songName;

    element.getElementsByTagName('img')[2].src = songitem2[i + 2].poster;
    element.getElementsByTagName('h4')[2].innerHTML = songitem2[i + 2].songName;

    element.getElementsByTagName('img')[3].src = songitem2[i + 3].poster;
    element.getElementsByTagName('h4')[3].innerHTML = songitem2[i + 3].songName;

    element.getElementsByTagName('img')[4].src = songitem2[i + 4].poster;
    element.getElementsByTagName('h4')[4].innerHTML = songitem2[i + 4].songName;

    element.getElementsByTagName('img')[5].src = songitem2[i + 5].poster;
    element.getElementsByTagName('h4')[5].innerHTML = songitem2[i + 5].songName;

    element.getElementsByTagName('img')[6].src = songitem2[i + 6].poster;
    element.getElementsByTagName('h4')[6].innerHTML = songitem2[i + 6].songName;

    element.getElementsByTagName('img')[7].src = songitem2[i + 7].poster;
    element.getElementsByTagName('h4')[7].innerHTML = songitem2[i + 7].songName;

    element.getElementsByTagName('img')[8].src = songitem2[i + 8].poster;
    element.getElementsByTagName('h4')[8].innerHTML = songitem2[i + 8].songName;

    element.getElementsByTagName('img')[9].src = songitem2[i + 9].poster;
    element.getElementsByTagName('h4')[9].innerHTML = songitem2[i + 9].songName;

    element.getElementsByTagName('img')[10].src = songitem2[i + 10].poster;
    element.getElementsByTagName('h4')[10].innerHTML = songitem2[i + 10].songName;

})

let playbt = document.getElementsByClassName('bi-play-circle-fill')
let bt = document.getElementById('p01')
let bt1 = document.getElementById('p02')
let bt2 = document.getElementById('p001')
let music = new Audio(`07_sorry.mp3`)
let alone = new Audio('alonem.mp3')
let wave = document.getElementsByClassName('wave')[0]

let index = 1
let poster = document.getElementById('poster')
let title = document.getElementById('title')

let start = document.getElementById('start')
let end = document.getElementById('end')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementById('dot')

let volbar = document.getElementById('seekvol')
let volbar2 = document.getElementById('volbar2')
let voldot = document.getElementById('voldot')
let volicon = document.getElementById('volicon')

let prev = document.getElementById('prev')
let next = document.getElementById('next')

let w = document.getElementsByClassName('wave')
let p = document.getElementsByTagName('svg')



// *************first album succefully work**********8
let b01 = document.getElementById('01_dan')
let b02 = document.getElementById('02_snap')
let b03 = document.getElementById('03_thou')
let b04 = document.getElementById('04_love')
let b05 = document.getElementById('05_shape')
let b06 = document.getElementById('06_intension')
let b07 = document.getElementById('07_sorry')
let b08 = document.getElementById('08_un')

// *************second album succefully work**********8
let m01 = document.getElementById('11_we')
let m02 = document.getElementById('12_friends')
let m03 = document.getElementById('13_what')
let m04 = document.getElementById('14_selfish')
let m05 = document.getElementById('15_baby')
let m06 = document.getElementById('16_chaleya')
let m07 = document.getElementById('17_stay')
let m08 = document.getElementById('18_yummy')
let m09 = document.getElementById('19_let')
let m10 = document.getElementById('20_maiya')
let m11 = document.getElementById('21_kaise')

// console.log(music.getAttribute())
// if(music.getAttribute() == 'play')
// {
//     console.log("ID")
// }

// let i = 1

 

b01.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "08_un.mp3"
        title.innerHTML = songitem[7].songName
        poster.src = "./photos/08_un.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
    
    music.src = "01_dan.mp3"
    title.innerHTML = songitem[0].songName
    poster.src = "./photos/01_dan.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    // p.innerHTML = w
    // p.classList.remove('01_dan')
    // p.classList.add('wave')

    next.addEventListener('click',()=>
    {
        music.src = "02_snap.mp3"
        title.innerHTML = songitem[1].songName
        poster.src = "./photos/02_snap.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    
})

b02.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "01_dan.mp3"
    title.innerHTML = songitem[0].songName
    poster.src = "./photos/01_dan.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "02_snap.mp3"
    title.innerHTML = songitem[1].songName
    poster.src = "./photos/02_snap.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "03_thou.mp3"  
    title.innerHTML = songitem[2].songName
    poster.src = "./photos/03_thou.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

b03.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "02_snap.mp3"
        title.innerHTML = songitem[1].songName
        poster.src = "./photos/02_snap.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "03_thou.mp3"
    title.innerHTML = songitem[2].songName
    poster.src = "./photos/03_thou.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "04_love.mp3"
    title.innerHTML = songitem[3].songName
    poster.src = "./photos/04_love.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

b04.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "03_thou.mp3"
    title.innerHTML = songitem[2].songName
    poster.src = "./photos/03_thou.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "04_love.mp3"
    title.innerHTML = songitem[3].songName
    poster.src = "./photos/04_love.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "05_shape.mp3"
    title.innerHTML = songitem[4].songName
    poster.src = "./photos/05_shape.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

b05.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "04_love.mp3"
        title.innerHTML = songitem[3].songName
        poster.src = "./photos/04_love.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "05_shape.mp3"
    title.innerHTML = songitem[4].songName
    poster.src = "./photos/05_shape.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "06_intension.mp3"
        title.innerHTML = songitem[5].songName
        poster.src = "./photos/06_intension.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

b06.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "05_shape.mp3"
        title.innerHTML = songitem[4].songName
        poster.src = "./photos/05_shape.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "06_intension.mp3"
    title.innerHTML = songitem[5].songName
    poster.src = "./photos/06_intension.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "07_sorry.mp3"
        title.innerHTML = songitem[6].songName
        poster.src = "./photos/07_sorry.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

b07.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "06_intension.mp3"
        title.innerHTML = songitem[5].songName
        poster.src = "./photos/06_intension.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "07_sorry.mp3"
    title.innerHTML = songitem[6].songName
    poster.src = "./photos/07_sorry.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "08_un.mp3"
        title.innerHTML = songitem[7].songName
        poster.src = "./photos/08_un.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

b08.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "07_sorry.mp3"
        title.innerHTML = songitem[6].songName
        poster.src = "./photos/07_sorry.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "08_un.mp3"
    title.innerHTML = songitem[7].songName
    poster.src = "./photos/08_un.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "01_dan.mp3"
    title.innerHTML = songitem[0].songName
    poster.src = "./photos/01_dan.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    b01.style.fill = 'white'
    })
})


// ***************Second Succesfull Album******************
m01.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "05_shape.mp3"
        title.innerHTML = songitem2[7].songName
        poster.src = "./photos/05_shape.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
    
    music.src = "11_we.mp3"
    title.innerHTML = songitem2[0].songName
    poster.src = "./photos/11_we.jpg"
    music.play()
    alone.pause()
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "12_friends.mp3"
        title.innerHTML = songitem2[1].songName
        poster.src = "./photos/12_friends.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
        b02.style.fill = 'white'
    })

    
})

m02.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "11_we.mp3"
        title.innerHTML = songitem2[0].songName
        poster.src = "./photos/11_we.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

        music.src = "12_friends.mp3"
        title.innerHTML = songitem2[1].songName
        poster.src = "./photos/12_friends.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "13_what.mp3"
    title.innerHTML = songitem2[2].songName
    poster.src = "./photos/13_what.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m03.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "12_friends.mp3"
        title.innerHTML = songitem2[1].songName
        poster.src = "./photos/12_friends.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "13_what.mp3"
    title.innerHTML = songitem2[2].songName
    poster.src = "./photos/13_what.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "14_selfish.mp3"
    title.innerHTML = songitem2[3].songName
    poster.src = "./photos/14_selfish.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m04.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "13_what.mp3"
        title.innerHTML = songitem2[2].songName
        poster.src = "./photos/13_what.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "14_selfish.mp3"
    title.innerHTML = songitem2[3].songName
    poster.src = "./photos/14_selfish.jpg"
    music.play()
    alone.pause()
    playbt.classList.add('wave')
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "15_baby.mp3"
    title.innerHTML = songitem2[4].songName
    poster.src = "./photos/15_baby.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m05.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "14_selfish.mp3"
    title.innerHTML = songitem2[3].songName
    poster.src = "./photos/14_selfish.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "15_baby.mp3"
    title.innerHTML = songitem2[4].songName
    poster.src = "./photos/15_baby.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "16_chaleya.mp3"
        title.innerHTML = songitem2[5].songName
        poster.src = "./photos/16_chaleya.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

m06.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "15_baby.mp3"
    title.innerHTML = songitem2[4].songName
    poster.src = "./photos/15_baby.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "16_chaleya.mp3"
    title.innerHTML = songitem2[5].songName
    poster.src = "./photos/16_chaleya.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "17_stay.mp3"
        title.innerHTML = songitem2[6].songName
        poster.src = "./photos/17-stay.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

m07.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "16_chaleya.mp3"
    title.innerHTML = songitem2[5].songName
    poster.src = "./photos/16_chaleya.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "17_stay.mp3"
        title.innerHTML = songitem2[6].songName
        poster.src = "./photos/17_stay.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "18_yummy.mp3"
        title.innerHTML = songitem2[7].songName
        poster.src = "./photos/18_yummy.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })
})

m08.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "17_stay.mp3"
        title.innerHTML = songitem2[6].songName
        poster.src = "./photos/17-stay.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "18_yummy.mp3"
    title.innerHTML = songitem2[7].songName
    poster.src = "./photos/18_yummy.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
    music.src = "19_let.mp3"
    title.innerHTML = songitem2[8].songName
    poster.src = "./photos/19_let.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m09.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "18_yummy.mp3"
        title.innerHTML = songitem2[7].songName
        poster.src = "./photos/18_yummy.jpg"
        music.play()
        alone.pause()
        wave.classList.add('active')
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
    })

    music.src = "19_let.mp3"
    title.innerHTML = songitem2[8].songName
    poster.src = "./photos/19_let.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "20_maiya.mp3"
    title.innerHTML = songitem2[9].songName
    poster.src = "./photos/20_maiya.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m10.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "19_let.mp3"
    title.innerHTML = songitem2[8].songName
    poster.src = "./photos/19_let.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "20_maiya.mp3"
    title.innerHTML = songitem2[9].songName
    poster.src = "./photos/20_maiya.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "21_kaise.mp3"
    title.innerHTML = songitem2[10].songName
    poster.src = "./photos/21_kaise.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})

m11.addEventListener('click',()=>
{
    prev.addEventListener('click',()=>
    {
        music.src = "20_maiya.mp3"
    title.innerHTML = songitem2[9].songName
    poster.src = "./photos/20_maiya.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })

    music.src = "21_kaise.mp3"
    title.innerHTML = songitem2[10].songName
    poster.src = "./photos/21_kaise.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'

    next.addEventListener('click',()=>
    {
        music.src = "11_we.mp3"
    title.innerHTML = songitem2[11].songName
    poster.src = "./photos/11_we.jpg"
    music.play()
    alone.pause()
    wave.classList.add('active')
    bt.style.fill = 'rgb(172, 3, 3)'
    bt1.style.fill = 'white'
    })
})






//main playback wave and bt controller
bt.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        console.log("Playing........")
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
        bt.classList.remove('bi-play-fill')
        bt.classList.add('bi-pause-fill')
        wave.classList.add('active')
    }
})

bt1.addEventListener('click', () => {
    if (!music.paused || music.currentTime >= 0) {
        music.pause()
        wave.classList.remove('active')
        bt.style.fill = 'white'
        bt1.style.fill = 'rgb(172, 3, 3)'
    }
})



// ************** Total Waste******************
// // Music List Hover
// const allbackground = () => 
// {
//     Array.from(document.getElementsByClassName('list')).forEach((element) => {

//         element.style.background = 'rgb(172, 3, 3,0)'
//     })
// }


// // Music List Playing Handling
// const allplay = () => 
// {
//     Array.from(document.getElementsByClassName('play')).forEach((element) => {
//         // console.log("hello")
//         console.log(index)
//         element.style.fill = 'rgb(172, 3, 3)'
//     })
// }


// ***********First Previous Failed Album******************8
// Array.from(document.getElementsByClassName('musiclist')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         index = e.target.id
//         console.log("index is" + index)
//         music.src = `${index}.mp3`
//         poster.src = `photos/${index}.jpg`

//         // allplay() 

//         // changing main playback and handle
//         // if(index == "1")
//         // {
//         //     console.log("in")
//         //     poster.src = './photos/01_dan.jpg'
//         //     title.innerHTML =  `Dandelion <br>
//         //     <p>Ruth B.</p>`
//         // }

//         let song_title = songitem.filter((ele) => {
//             return ele.id = index;
//         })
//         song_title.forEach(ele => {
//             let { songName } = ele
//             title.innerHTML = songName
//         })

//         if (music.paused || music.currentTime <= 0) 
//         {
//         music.play()
//         console.log("Playing........")
//         bt.classList.remove('bi-play-fill')
//         bt.classList.add('bi-pause-fill')
        // bt.style.fill = 'rgb(172, 3, 3)'
        // bt1.style.fill = 'white'
//         wave.classList.add('active')
//         }
//         else 
//         {
//             music.pause()
//             console.log("Paused......")
//             bt.classList.remove('bi-pause-fill')
//             bt.classList.add('bi-play-fill')
//             wave.classList.remove('active')
//         }

//         // changing main playback heading and text


//         // allbackground();
//         // Array.from(document.getElementsByClassName('musiclist'))[`${index}`].style.background = 'rgb(172, 3, 3,.3)' 
//     })
// })

// *******************Second Conflict Album********************
// Array.from(document.getElementsByClassName('box')).forEach((element) => 
// {
//     element.addEventListener('click', (e) => 
//     {
//         music.src = `15_baby.mp3`
//         music.play()
//         poster.src = `photos/s5.jpg`
//         title.innerHTML = `Baby <br>
//         <p>Justine Bieber</p>`
//         wave.classList.add('active')
//         bt.style.fill = 'rgb(172, 3, 3)'
//         bt1.style.fill = 'white'
//     })

//     next.addEventListener('click', () =>
//     {
//         music.src = `16_chaleya.mp3`
//         music.play()
//         poster.src = `photos/s6.jpg`
//         title.innerHTML = `Chaleya <br>
//             <p>Arijit Singh</p>`
//         wave.classList.add('active')
//         bt.style.fill = 'rgb(172, 3, 3)'
//         bt1.style.fill = 'white'
//     })
// })


// Alone Music Play

bt1.addEventListener('click', () => {
    alone.pause()
    music.pause()
    bt.style.fill = 'white'
    bt1.style.fill = 'rgb(172, 3, 3)'
    wave.classList.remove('active')
})

bt2.addEventListener('click', () => {
    // if ((alone.paused || alone.currentTime <= 0) && (music.paued || music.currentTime <= 0)) {
        music.pause()
        alone.play()
        console.log("Playing........")
        bt.style.fill = 'rgb(172, 3, 3)'
        bt1.style.fill = 'white'
        wave.classList.add('active')
        poster.src = './photos/a1.jpg'
        title.innerHTML = `Alone <br>
        <p>Marshmello</p>`
    // }
})


music.addEventListener('timeupdate', () => {
    let m_curr = music.currentTime
    let m_dur = music.duration

    let min = Math.floor(m_dur / 60)
    let sec = Math.floor(m_dur % 60)
    if (sec < 10) {
        sec = `0${sec}`
    }

    end.innerText = `${min}:${sec}`

    let min1 = Math.floor(m_curr / 60)
    let sec1 = Math.floor(m_curr % 60)

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    start.innerText = `${min1}:${sec1}`
    let progressbar = ((music.currentTime / music.duration) * 100)
    seek.value = progressbar
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`

})

seek.addEventListener('change', () => {
    music.currentTime = (seek.value * music.duration) / 100
})

music.addEventListener('ended', () => {
    wave.classList.remove('active')
    bt.style.fill = 'white'
})

alone.addEventListener('timeupdate', () => {
    let m_curr = alone.currentTime
    let m_dur = alone.duration

    let min = Math.floor(m_dur / 60)
    let sec = Math.floor(m_dur % 60)
    if (sec < 10) {
        sec = `0${sec}`
    }

    end.innerText = `${min}:${sec}`

    let min1 = Math.floor(m_curr / 60)
    let sec1 = Math.floor(m_curr % 60)

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    start.innerText = `${min1}:${sec1}`
    start.innerText = `${min1}:${sec1}`

    let progressbar = ((music.currentTime / music.duration) * 100)
    seek.value = progressbar
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
    alone.currentTime = (seek.value * alone.duration) / 100
})

alone.addEventListener('ended', () => {
    wave.classList.remove('active')
    bt.style.fill = 'white'
})



volbar.addEventListener('change', () => {
    let volprogress = volbar.value
    volbar2.style.width = `${volprogress}%`
    voldot.style.left = `${volprogress}%`
    music.volume = volprogress / 100
})

document.addEventListener('keydown', function(e) 
{
    let volprogress = volbar.value
    if (e.key === 'ArrowUp') {
        volprogress += 10
        updateSlider();
    } else if (e.key === 'ArrowLeft') {
        volprogress -= 10
        updateSlider();
    }
});


document.addEventListener('keydown', function(e) 
{
   if(e.key == ' ')
   {
    music.pause()
    alone.pause()
    wave.classList.remove('active')
    bt.style.fill = 'white'
    bt1.style.fill = 'rgb(172, 3, 3)'
   }
});
document.addEventListener('keyup', function(e) 
{
   if(e.key == ' ')
   {
    music.pause()
    alone.pause()
    
   }
});


// prev.addEventListener('click',()=>
// {
//     index -= 1
//     if(index < 1)
//     {
//         Array.from(document.getElementsByClassName('list')).length
//     }
//     music.src = `${index}.mp3`
//     poster.src = `${index}.jpeg`
//     element.style.fill = 'white'
//     if (music.paused || music.currentTime <= 0) 
//     {
//         music.play()
//         console.log("Playing........")
//         bt.classList.remove('bi-play-fill')
//         bt.classList.add('bi-pause-fill')
//         bt.style.fill = 'rgb(172, 3, 3)'
//         bt1.style.fill = 'white'
//         wave.classList.add('active')
//     }
//     else 
//     {
//         music.pause()
//         console.log("Paused......")
//         bt.classList.remove('bi-pause-fill')
//         bt.classList.add('bi-play-fill')
//         wave.classList.remove('active')
//     }

//     // changing main playback heading and text
//     let song_title = songitem.filter((ele) => {
//         return ele.id = index;
//     })
//     songitem.forEach(ele => {
//         let { songName } = ele
//         song_title.innerHTML = songName
//     })
//     allplay()
//     allbackground()
//     Array.from(document.getElementsByClassName('list'))[`${index}`].style.background = 'rgb(172, 3, 3,.3)' 

// })

// next.addEventListener('click',()=>
// {
//     index += 1

//     if(index > Array.from(document.getElementsByClassName('list')).length
//     )
//     {
//         index = 1
//     }

//     music.src = `${index}.mp3`
//     poster.src = `${index}.jpeg`
//     element.style.fill = 'white'
//     if (music.paused || music.currentTime <= 0) 
//     {
//         music.play()
//         console.log("Playing........")
//         bt.classList.remove('bi-play-fill')
//         bt.classList.add('bi-pause-fill')
//         bt.style.fill = 'rgb(172, 3, 3)'
//         bt1.style.fill = 'white'
//         wave.classList.add('active')
//     }
//     else 
//     {
//         music.pause()
//         console.log("Paused......")
//         bt.classList.remove('bi-pause-fill')
//         bt.classList.add('bi-play-fill')
//         wave.classList.remove('active')
//     }

//     // changing main playback heading and text
//     let song_title = songitem.filter((ele) => {
//         return ele.id = index;
//     })
//     songitem.forEach(ele => {
//         let { songName } = ele
//         song_title.innerHTML = songName
//     })
//     allplay()
//     allbackground()
//     Array.from(document.getElementsByClassName('list'))[`${index}`].style.background = 'rgb(172, 3, 3,.3)' 

// })

let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let arrow3 = document.getElementById('arrow3')
let arrow4 = document.getElementById('arrow4')
let popsong = document.getElementById('boxing')
let art = document.getElementById('alll')

arrow1.addEventListener('click', () => {
    popsong.scrollLeft -= 480
})
arrow2.addEventListener('click', () => {
    popsong.scrollLeft += 480
})

arrow3.addEventListener('click', () => {
    art.scrollLeft -= 360
})
arrow4.addEventListener('click', () => {
    art.scrollLeft += 360
})

document.addEventListener('keydown', function(e) 
{
    if (e.key === 'ArrowRight') {
        popsong.scrollLeft += 480
      updateSlider();
    } else if (e.key === 'ArrowLeft') {
        popsong.scrollLeft -= 480
    }
});

document.addEventListener('keydown', function(e) 
{
   if(e.key == 'ArrowDown')
   {
    if (e.key === 'ArrowRight') {
        art.scrollLeft += 480
      updateSlider();
    } else if (e.key === 'ArrowLeft') {
        art.scrollLeft -= 360
    }
   }
});

