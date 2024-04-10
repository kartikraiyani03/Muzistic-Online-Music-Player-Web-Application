let flag1 = 0;
    let flag2 = 0;
    let flag3 = 0;
    let flag4 = 0;
    let submit = document.getElementById('submit')
    let pass = document.getElementById('pass')
    let cpass = document.getElementById('cpass')
    let al = document.getElementById('al')
    let user = document.getElementById('user')
    let gmail = document.getElementById('gmail')

    function clickcpass()
    {
        if(cpass.value.length > 0)
        {
            if(pass.value != cpass.value)
            {
                al.innerText = 'Password Does Not Match'
                flag1 = 0
            }
            else
            {
                al.innerText = ''
                flag1 = 1
            }
        }
        else
        {
            al.innerText = 'Please Enter Confirm Password'
            flag1 = 0
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
            al.innerText = 'Please Enter Your Password'
            flag2 = 0
        }
    }

    function clickuser()
    {
        if(user.value.length > 0)
        {
            flag3 = 1
            al.innerText = ''
        }
        else
        {
            al.innerText = 'Please Enter Your Name'
            flag3 = 0
        }
    }
    function clickgmail()
    {
        if(gmail.value.length > 0)
        {
            flag4 = 1
            al.innerText = ''
        }
        else
        {
            al.innerText = 'Please Enter Your Gmail'
            flag4 = 0
        }
    }
    
    function validate()
    {
        if(flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1)
        {
            return true
        }
        else
        {
            if(flag3 != 1)
            {
                al.innerText = 'Please Enter Your Name'
                return false
            }
            if(flag2 != 1)
            {
                al.innerText = 'Please Enter Your Confirm Password'
            }
            if(flag4 != 1)
            {
                al.innerText = 'Please Enter Your Gmail'
                return false
            }
            if(flag1 != 1)
            {
                al.innerText = 'Please Enter Your Password'
                return false
            }
        }
    }

    let bt = document.getElementById('tg')
    let pass2 = document.getElementById('cpass')
    let pass3 = document.getElementById('pass')

    function toggle() {
        let type = pass2.getAttribute('type')
        if (type === 'password') {
            pass2.setAttribute('type', 'text')
            pass3.setAttribute('type', 'text')
            bt.innerText = 'Hide Password'
        }
        else 
        {
            pass2.setAttribute('type', 'password')
            pass3.setAttribute('type', 'password')
            bt.innerText = 'Show Password'
        }
    }