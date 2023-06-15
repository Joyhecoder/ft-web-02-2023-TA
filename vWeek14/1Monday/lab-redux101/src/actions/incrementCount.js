const incrementCount = (num) => {
    console.log("inside increment action")
    return {
        type: "INCREMENT",
        data: num
    }
}
export default incrementCount