const express = require("express");
const router = express.Router()

router.post("/ex1", (req, res) => {
    const nums = req.body
    let soma = 0
    for (let n of nums) {
        soma += n
    }
    const media = soma / nums.length
    res.json(media)
})

router.post("/ex2", (req, res) => {
    const nums = req.body;
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maior) {
            maior = nums[i];
        }
        if (nums[i] < menor) {
            menor = nums[i];
        }
    }
    res.json({ maior: maior, menor: menor });
})

router.post("/ex3", (req, res) => {
    const nums = [];
    for (let i = 1; i <= 10; i++) {
        nums.push(i);
    }
    res.json({nums});
})

router.post("/ex4", (req, res) => {
    const nums = [];
    for (let i = 10; i >= 1; i--) {
        numeros.push(i);
    }
    res.json({nums});
})

router.post("/ex5", (req, res) => {
    const nums = []
    let contador = 0;
    for (let i = 101; contador < 10; i++) {
        nums.push(i)
        contador++;
    }
    res.json({numeros});
})

router.post("/ex6", (req, res) => {
    const nums = req.body;
    const soma = nums.reduce((acc, curr) => acc + curr, 0);
    res.json({ soma });
});

router.post("/ex7", (req, res) => {
    const {n} = req.body;
    const nums = [];
    for (let i = 2; i <= n; i += 2) {
        nums.push(i);
    }
    res.json({n});
});

router.post("/ex8", (req, res) => {
    const nums = req.body;
    const contador = nums.filter(num => num < 0).length;
    res.json({ contador });
});

router.post("/ex9", (req, res) => {
    const nums = req.body;
    const array = nums.filter(num => num < 0);
    res.json({ array });
});

router.post("/ex10", (req, res) => {
    const num = req.body;
    let dentro = 0;
    let fora = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 10 && num[i] <= 20) dentro++;
        else fora++;
    }

    res.json({ dentro, fora });
});

router.post("/ex11", (req, res) => {
    const num = req.body;
    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }

    const med = soma/num.length;
    res.json({med});
})

router.post("/ex12", (req, res) => {
    const num = req.body;
    let total = 0;

    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }

    const media = total / num.length;
    res.json({media});
});


router.post("/ex13", (req, res) => {
    const nums = req.body;
    const triplos = nums.map(numero => numero * 3);
    res.json({ triplos });
})

router.post("/ex14", (req, res) => {
    const nums = req.body;
    const dobros = nums.map(numero => numero * 2);
    res.json({ dobros });
})

router.post("/ex15", (req, res) => {
    const nums = req.body;
    let soma = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 40) soma += numeros[i];
    }
    res.json({soma});
})

router.post("/ex16", (req, res) => {
    const { numMercadoria, numsMercadorias } = req.body;
    
    const totalEstoque = numMercadoria.reduce((acc, current) => acc + current, 0);
    const media = totalEstoque / numsMercadorias;

    res.json({ totalEstoque, media });
})


router.post("/ex17", (req, res) => {
    const { valorInicial, valorFinal } = req.body;
    let somaImpares = 0;

    for (let i = valorInicial; i <= valorFinal; i++) {
        if (i % 2 !== 0) {
            somaImpares += i;
        }
    }

    res.json({ impares: somaImpares });
});

router.post("/ex18", (req, res) => {
    const nums = req.body;
    let maior = nums[0];
    let menor = nums[0];
    let soma = 0;

    nums.forEach(valor => {
        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;
        soma += valor;
    });

    const media = soma/nums.length;
    res.json({ maior, menor, media });
});

router.post("/ex19", (req, res) => {
    const alunos = req.body;
    const numAlunosPorCurso = [0, 0, 0];
    const numAlunosEntre20e25PorCurso = [0, 0, 0];
    const somaIdadesPorCurso = [0, 0, 0];
    const numAlunosParaMediaPorCurso = [0, 0, 0];

    for (let aluno of alunos) {
        numAlunosPorCurso[aluno.curso - 1]++;
        if (aluno.idade >= 20 && aluno.idade <= 25) numAlunosEntre20e25PorCurso[aluno.curso - 1]++;
        somaIdadesPorCurso[aluno.curso - 1] += aluno.idade;
        numAlunosParaMediaPorCurso[aluno.curso - 1]++;
    }

    const mediaIdadePorCurso = somaIdadesPorCurso.map((soma, index) => soma / numAlunosParaMediaPorCurso[index]);

    let menorMediaIdadeCurso = 1;
    for (let i = 1; i < mediaIdadePorCurso.length; i++) {
        if (mediaIdadePorCurso[i] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = i;
        }
    }

    res.json({ numAlunosPorCurso, numAlunosEntre20e25PorCurso, menorMediaIdadeCurso });
});

router.post("/ex20", (req, res) => {
    let tab = '';
    for (let i = 1; i <= 10; i++) {
        tab += `Tabuada do ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tab += `${i} x ${j} = ${i * j}\n`;
        }
        tab += '\n'; 
    }
    res.send(tab);
});

router.post("/ex21", (req, res) => {
    const especs = req.body;
    const quantidadesNotas10 = especs.filter(espectador => espectador.nota === 10).length;
    const somaIdades = especs.reduce((soma, espectador) => soma + espectador.idade, 0);
    const mediaIdade = somaIdades / especs.length;
    const quantidadesNotas5ouMenos = especs.filter(espectador => espectador.nota <= 5).length;
    const percentagemNotas5ouMenos = (quantidadesNotas5ouMenos / especs.length) * 100;
    const maisVelha = especs.reduce((maisVelha, espectador) => {
        return (espectador.idade > maisVelha.idade) ? espectador : maisVelha;
    });
    const resposta = { quantidadesNotas10, mediaIdade, percentagemNotas5ouMenos };
    resposta.maisVelha =  maisVelha.nome;
    res.json(resposta);
})

router.post("/ex22", (req, res) => {
    const produtos = req.body;
    
    const precos = produtos.map(produto => produto.preco);
    const maiorPreco = Math.max(...precos);
    const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);
    const mediaPrecos = somaPrecos / produtos.length;

    res.json({ maiorPreco, mediaPrecos });
});

module.exports = router;

