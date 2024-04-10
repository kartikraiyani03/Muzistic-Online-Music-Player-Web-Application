
let submit = document.getElementById('submit')
let bt = document.getElementById('tg')
let pass = document.getElementById('pass')
let user = document.getElementById('user')
let al = document.getElementById('al')
let flag1 = 0
let flag2 = 0
let sign = document.querySelector('.sign-up')
let w1 = document.querySelector('.w1')
let w2 = document.querySelector('.w2')

sign.addEventListener('click',()=>
{
    w1.style.opacity = 0
    w1.style.opacity = 1
})

function toggle() 
{
    let type = pass.getAttribute('type')
    if (type === 'password') 
    {
        pass.setAttribute('type', 'text')
        bt.innerText = 'Hide Password'
    }
    else 
    {
        pass.setAttribute('type', 'password')
        bt.innerText = 'Show Password'
    }
}

function validate()
{
    if(flag1 == 1 && flag2 == 1)
    {
        return true
    }
    else
    {
        if(flag1 != 1)
        {
            al.innerText = 'Please Enter Username'
            return false;
        }
        if(flag2 != 1)
        {
            al.innerText = 'Please Enter Password'
            return false;
        }
    }
}

function clickuser()
{
    if(user.value.length > 0)
    {
        flag1 = 1
        al.innerText = ''
    }
    else
    {       
        flag1 = 0
        al.innerText = 'Please Enter Username'
    }
}

function clickpass()
{
    if(pass.value.length > 0)
    {
        flag2 = 1
        al.innerText = ''
    }
    else
    {       
        flag2 = 0
        al.innerText = 'Please Enter Password'
    }
}