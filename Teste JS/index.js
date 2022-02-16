    function calcular()
    {
        let n1 = parseFloat(document.getElementById('num1').value);//   aqui converte o numero pra um float e getElementById 
        let n2 = parseFloat(document.getElementById('num2').value);  // vai pegar o id(elemento) e value  le o valor digitado
        let oper = document.getElementById('operacao').value;

        if(oper == '+')
        {
            document.getElementById('result').value = n1+n2;
        }

        if(oper == '-')
        {
            document.getElementById('result').value = n1-n2;
        }

        if(oper == '/')
        {
            document.getElementById('result').value = n1/n2;
        }

        if(oper == 'X')
        {
            document.getElementById('result').value = n1*n2;
        }



    }