document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 'fc-1888', name: 'flux capacitor', avgRating: 4.5 },
        { id: 'fc-2050', name: 'power laces', avgRating: 4.7 },
        { id: 'fs-1987', name: 'time circuits', avgRating: 3.5 },
        { id: 'ac-2000', name: 'low voltage reactor', avgRating: 3.9 },
        { id: 'jj-1969', name: 'warp equalizer', avgRating: 5.0 }
    ];

    const productNameSelect = document.getElementById('product-name');
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.text = product.name;
            productNameSelect.appendChild(option);
        });
    }

    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = document.getElementById('user-name').value;

            // Increment review counter in localStorage
            let reviewCount = localStorage.getItem('reviewCount');
            if (!reviewCount) {
                reviewCount = 0;
            }
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem('reviewCount', reviewCount);

            // Redirect to review.html with URL parameters
            const formData = new FormData(reviewForm);
            const searchParams = new URLSearchParams(formData);
            searchParams.append('reviewCount', reviewCount);
            searchParams.append('userName', userName);

            window.location.href = `review.html?${searchParams.toString()}`;
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const reviewCount = urlParams.get('reviewCount');
    const userName = urlParams.get('userName');

    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }

    const thankYouMessage = document.getElementById('thank-you-message');
    if (thankYouMessage && userName) {
        thankYouMessage.innerHTML = `Thank you !!! <span style="font-weight: bold; font-style: italic; font-size: larger;">${userName.toUpperCase()}</span>, for submitting your review!`;
    }

    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
    }

    const modifySpan = document.getElementById('modify');
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    if (modifySpan) {
        modifySpan.textContent = formattedLastModified;
    }
});
