window.addEventListener('DOMContentLoaded', function () {

    const addSingButton = document.createElement('button');
    addSingButton.innerHTML = 'Sing!';
    document.body.appendChild(addSingButton);
    console.log('Button Added');

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container';
    document.body.appendChild(buttonContainer);

    addSingButton.addEventListener('click', function () {
        (singTheSong());
    })

});

function singTheSong() {

    let furFriends = ['Bo', 'Lilly', 'Grace', 'Marley', 'Macey'];


    for (let furryFriends = 0; furryFriends < furFriends.length; furryFriends++) {

        const friendDiv = document.createElement('div');
        friendDiv.class = 'friend';
        //Attempt to Create a div for each furFriend in the array

        let friendName = createElement('h3');
        friendName.textContent[0].function() = 'furryFriends'
        //Attempt to Create h3 element for each furFriend in the array

        document.body.appendChild('friendDiv');
        //append friendDiv-div to body 
        friendDiv.appendChild('friendName');
        //append friendName-h3 to friendDiv
        friendName.appendChild('para');
        //append para-p to friendName

        for (let j = 99; j > 0; j--) {

            if (j > 2) {
                const para = document.createElement('p');
                para.textContent = j + ' lines of code in the file, ' + j + ' lines of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' + + (j - 1) + ' lines of code in the file.';
            }
            else if (j == 2) {
                const para = document.createElement('p');
                para.textContent =  j + ' lines of code in the file, ' + j + ' lines of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' + (j - 1) + ' line of code in the file.';
            }
            else {
                const para = document.createElement('p');  
                para.textContent = j + ' line of code in the file, ' + j + ' line of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' + (j - 1) + ' lines of code in the file.';
            }
        }
    }

}


