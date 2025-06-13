let newCompound = document.querySelector('#new-compound');
let addCompoundBtn = document.querySelector('#add-compound-btn');
let compoundList = document.querySelector('#compound-list');

addCompoundBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newCompound.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        compoundList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    compoundList.appendChild(li);
    newCompound.value = ''; // Clear the input field after adding
    newCompound.focus(); // Focus back on the input field 
});

let newPrimary = document.querySelector('#new-primary');
let addPrimaryBtn = document.querySelector('#add-primary-btn');
let primaryList = document.querySelector('#primary-list');

addPrimaryBtn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = newPrimary.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        primaryList.removeChild(li);
    });

    li.appendChild(btn);
    primaryList.appendChild(li);
    newPrimary.value = '';
    newPrimary.focus();
});

let newSymbolic = document.querySelector('#new-symbolic');
let ns1 = document.querySelector('#ns1');
let ns2 = document.querySelector('#ns2');
let ns3 = document.querySelector('#ns3');
let rule = document.querySelector('#natual-deduction-rule');
let addSymbolicBtn = document.querySelector('#add-symbolic-btn');
let symbolicList = document.querySelector('#symbolic-list');

addSymbolicBtn.addEventListener('click', function() {
    let li = document.createElement('li');
    
    // 참조 정보 결합
    let refs = [ns1.value, ns2.value, ns3.value].filter(ref => ref !== '').join(', ');
    let refText = refs ? `[${refs}]` : '';

    li.textContent = `${newSymbolic.value}  ${refText}  (${rule.value})`;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        symbolicList.removeChild(li);
    });

    li.appendChild(btn);
    symbolicList.appendChild(li);

    newSymbolic.value = '';
    ns1.value = '';
    ns2.value = '';
    ns3.value = '';
    rule.selectedIndex = 0;
    newSymbolic.focus();
});

function insertAtCursor(input, textToInsert) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = input.value;
    input.value = text.slice(0, start) + textToInsert + text.slice(end);
    input.selectionStart = input.selectionEnd = start + textToInsert.length;
    input.focus();
}

// 기호 버튼들 이벤트 연결
document.querySelector('#not-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '∼');
});
document.querySelector('#and-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '∧');
});
document.querySelector('#or-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '∨');
});
document.querySelector('#imp-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '→');
});
document.querySelector('#bi-imp-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '↔');
});

document.querySelector('#open-assumption-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), '[[ ');
});

document.querySelector('#close-assumption-btn').addEventListener('click', () => {
    insertAtCursor(document.querySelector('#new-symbolic'), ' ]]');
});

