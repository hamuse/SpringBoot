function InputText(){ /*  Func 함수 선언식 */
	this.make = function(){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			const input = document.createElement('input')
			input.setAttribute('type','text')
			input.setAttribute('id','val')
			return input
		/* } */
	}
}
function InputButton(){ /*  Func 함수 선언식 */
	this.make = function(){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			const input = document.createElement('input')
			input.setAttribute('type','button')
			input.setAttribute('value','버튼')
			input.setAttribute('id','btn')
			return input
		/* } */
	}
}
function Br(){ /*  Func 함수 선언식 */
	this.make = function(){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			
			const br = document.createElement('br')
			return br
		/* } */
	}
}
function Func02(){
	this.play = function(){
		if(input == nudefined || input == null || input == ''){
			alert('텍스트 필드를 입력하세요')
		}else{
			alert((input.value !== '') ? input.value : '먼저 입력하시오')
			input.focus()
		}
		choice.value = 0
	}
}
function Factory(type){
 	switch(type){
		case 'inputText': return new InputText()
			break
		case 'inputButton' : return new InputButton()
			break
		case 'br' : return new Br()
			break 
		}
}

		
