function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Ошибка';
    }
}
function calculatePrecentage(){
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100
    }catch (error) {
        display.value = 'Ошибка';
    }
}
function raisePower(){
    const display = document.getElementById('display');
    let value = display.value
    try {
        display.value = Math.pow(eval(value), 2)
    }catch (error) {
        display.value = 'Ошибка';
    }
}
function koren(){
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value))
    }catch (error) {
        display.value = 'Ошибка';
    }
}

describe("pow", function() {
    it("корень из 4  = 2", function() {
        assert.equal(Math.sqrt(4), 2);
    });
    
    it("корень из 4  = 6", function() {
        assert.equal(Math.sqrt(4), 6);
    });
    
    it("3 в квадрате будет 9", function() {
        assert.equal(Math.pow(eval(3), 2),9)
    });
    it("3 в квадрате будет 10", function() {
        assert.equal(Math.pow(eval(3), 2),10)
    });

    it("2 в процентах = 0,02", function() {
        assert.equal(eval(2)/100, 0.02)
    });

    it("2 в процентах = 0,05", function() {
        assert.equal(Math.pow(eval(2)/100, 0.05))
    });

    it("5 - 2 = 3", function() {
        assert.equal(5-2,3)
    });

    it("5 - 2 = 2", function() {
        assert.equal(5-2,2)
    });

    it("5 + 2 = 7", function() {
        assert.equal(5+2,7)
    });

    it("5 + 2 = 8", function() {
        assert.equal(5+2,8)
    });

    it("6:2 = 3", function() {
        assert.equal(6/2 ,3)
    });

    it("6:2 = 2", function() {
        assert.equal(6/2 ,2)
    });

    it("6*2 = 12", function() {
        assert.equal(6*2 ,12)
    });

    it("6*2 = 13", function() {
        assert.equal(6*2 ,13)
    });
});  