let currentIndex = 0
const reviews = document.querySelectorAll('.review')
// const slider = document.querySelector('.reviews-slide')

function showReview(index){
    reviews.forEach(review =>{
        review.classList.remove('first-review');
    });
    reviews[index].classList.add('first-review')
}
function nextReview(){
    currentIndex=(currentIndex+1) % reviews.length;
    showReview(currentIndex);
}
function previousReview(){
    currentIndex =(currentIndex -1 + reviews.length) % reviews.length;
    showReview(currentIndex)
}
showReview(currentIndex);