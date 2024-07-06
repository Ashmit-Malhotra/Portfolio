function onClickMenu() 
    {
        let x1 = document.getElementById('n1')
            x1.classList.toggle('change');
    }
        const text = document.querySelector(".Second_dynamic");
    
        const Load = () => {
            setTimeout(() => {
                text.textContent = "Full Stack Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Machine Learning Engineer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "UI Designer";
            }, 8000);
            setTimeout(() => {
                text.textContent = "Programmer";
            }, 12000);
        }
        
        Load();
        setInterval(Load, 16000);