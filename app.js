const inputs = document.querySelectorAll('input')
const Uinput = inputs[0]
const Ainput = inputs[1]
const Binput = inputs[2]

const Union = document.querySelector('.result .Union .ans')
const intersection = document.querySelector('.result .intersection .ans')
const UnionComplement = document.querySelector('.result .UnionComplement .ans')
const intersectionComplement = document.querySelector('.result .intersectionComplement .ans')
const Acomplement = document.querySelector('.result .Acomplement .ans')
const AcomplementofComplement = document.querySelector('.result .AcomplementofComplement .ans')
const Bcomplement = document.querySelector('.result .Bcomplement .ans')
const BcomplementofComplement = document.querySelector('.result .BcomplementofComplement .ans')
const diffrence1 = document.querySelector('.result .diffrence1 .ans')
const diffrence2 = document.querySelector('.result .diffrence2 .ans')
const symmentrictdiffrence = document.querySelector('.result .symmentrictdiffrence .ans')


const calculateResultbtn = document.querySelector('.button')

import { sets_utility } from "./set_utility.js"
let solution = new sets_utility


let U = []
let A = []
let B = []

function sepretevalue(varname, data) {
    let size = data.length
    let st = 0

    if (varname == U) {
        U = data.split(',').map(Number)
        Union.textContent = U
    }
    else if (varname == A) {
        A = data.split(',').map(Number)
    }
    else {
        B = data.split(',').map(Number)
    }
}

Uinput.addEventListener('input', (e) => {
    sepretevalue(U, e.target.value)
})

Ainput.addEventListener('input', (e) => {
    sepretevalue(A, e.target.value)
})

Binput.addEventListener('input', (e) => {
    sepretevalue(B, e.target.value)
})

calculateResultbtn.addEventListener("click", async () => {
    let intersectionans = await solution.intersection(A, B)
    let unionans = await solution.Union(A, B)
    let intersectionComplementans = null;
    let Acomplementans = null;
    let Bcomplementans = null;
    let symmentrictdiffrenceans = await solution.SymmentricDiffrence(unionans, intersectionans);
    let UnionComplementans = null;


    if (!U) {
        intersectionComplementans = await solution.complement(unionans, intersectionans)
        Acomplementans = await solution.complement(unionans, A)
        Bcomplementans = await solution.complement(unionans, B)
    }
    else{
        UnionComplementans = await solution.complement(U, unionans)
        intersectionComplementans = await solution.complement(U, intersectionans)
        Acomplementans = await solution.complement(U, A)
        Bcomplementans = await solution.complement(U, B)
    }

    let AdiffrenceB = await solution.diffrence(A, B)
    let BdiffrenceA = await solution.diffrence(B, A)


    if (!U) {
        Union.textContent = unionans
    }

    intersection.textContent = intersectionans
    UnionComplement.textContent = UnionComplementans
    intersectionComplement.textContent = intersectionComplementans
    Acomplement.textContent = Acomplementans
    AcomplementofComplement.textContent = A
    Bcomplement.textContent = Bcomplementans
    BcomplementofComplement.textContent = B
    diffrence1.textContent = AdiffrenceB
    diffrence2.textContent = BdiffrenceA
    symmentrictdiffrence.textContent = symmentrictdiffrenceans


    console.log(unionans)

})