/**
 * 한국어 문자열을 받아 해당하는 조사를 반환한다.
 * 
 * @param { String } korStr 한국어 문자열
 * @returns 문자열의 조사 (을, 를)
 */
export function getPartOfSpeech(korStr) {
    if (typeof korStr !== 'string' || !korStr || korStr === '') {
        console.log('getPartOfSpeech params is wrong. return empty string')
        return ''
    }

    return (isEndWithConsonant(korStr) ? '을' : '를')
}

/**
 * 한국어 마지막 문자열의 받침 여부를 확인한다.
 * 
 * @param { String } korStr 한국어 문자열
 * @returns 받침 존재여부
 */
export function isEndWithConsonant(korStr) {
    if (typeof korStr !== 'string' || !korStr || korStr === '') {
        console.log('isEndWithConsonant params is wrong. return false')
        return false
    }
    const finalCharCode = korStr.charCodeAt(korStr.length - 1)

    const finalConsonantCode = (finalCharCode - 44032) % 32

    // 0 = 받침 X, else = 받침 O
    return finalConsonantCode !== 0
}

/**
 * 시작날짜, 종료날짜 세팅
 * 
 * @param { Number } dayNum 날짜 수
 * @returns { Date } { startDate, endDate }  
 */
export function initRangeDate(dayNum) {
    const baseDate = 2

    const startDate = new Date()
    const endDate = new Date()

    startDate.setDate(startDate.getDate() + baseDate)

    /* 날짜 adding 관련 이슈사항 */
    // 1. 다른 Date 객체 참조
    endDate.setDate(startDate.getDate() + dayNum)

    // 2. 자신 Date 참조
    endDate.setDate(endDate.getDate() + baseDate + dayNum)

    /* 
        setDate는 param의 숫자 그대로 setting
        때문에 다른 객체 참고시 해당 객체의 값 변화에 의하여
        의도하지 않은 날짜로 set 가능성 생김
        
        때문에 무조건 자신을 참고하는 방식으로 사용
        소스에 기준이 되는 전역값 분리 및 활용
    */

    return {
        startDate,
        endDate
    }
}

/**
 * form tag 내 inputs validate 및 alert 노출
 * 
 * @param { v-form } form 
 */
export function validateForm(form) {
    const validate = form.validate()

    if (!validate) {
        // form tag 내 validate false input tags 조회 (validate시 errorBucket에 실패 개수만큼 담김)
        const falseInputs = form.inputs.filter(input => input.errorBucket.length > 0)
        // 가장 상위 조회 된 input tag의 첫번쨰 error 메시지 노출
        const validateMsg =  falseInputs[0].errorBucket[0]

        window.alert(validateMsg)
    }
}