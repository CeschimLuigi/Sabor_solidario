document.getElementById('showTextButton').addEventListener('click', function() {
    document.getElementById('textBox').classList.remove('hidden');
});

document.getElementById('closeTextButton').addEventListener('click', function() {
    document.getElementById('textBox').classList.add('hidden');
});