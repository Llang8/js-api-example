/* fetch('https://ct-mock-tech-assessment.herokuapp.com/')
    .then((res) => res.json())
    .then((data) => {

        populatePartners(data.partners)
        
    }) */

const getData = async () => {
    let res = await fetch('https://ct-mock-tech-assessment.herokuapp.com/')
    let data = await res.json()
    populatePartners(data.partners)
}

getData()

function populatePartners(people) {
    partnersList.innerHTML = ''

    // loop over data
    for (const person of people) {
        // create new list-group-item
        let newItem = document.createElement('li');
        newItem.classList.add('list-group-item');
        newItem.innerText = `${ person.firstName } ${ person.lastName }`

        // add active class on hover, remove it on mouseout
        newItem.addEventListener('mouseover', function() {
            newItem.classList.toggle('active');
        });
        newItem.addEventListener('mouseout', function() {
            newItem.classList.remove('active');
        });

        // add click event listener
        newItem.addEventListener('click', function() {
            partnerCardContainer.innerHTML = `
                <div class="card border-primary">
                <div class="card-body">
                    <h4 class="card-title">${ person.firstName } ${ person.lastName }</h4>
                    <p class="card-text">${ person.country }</p>
                </div>
                <div class="card-footer">
                    <ul class="list-group">
                        ${ (function() {
                            let lgi = '';

                            for (const availableDate of person.availableDates) {
                                lgi += `<li class="list-group-item">
                                            ${ availableDate }
                                        </li>`
                            }
                            return lgi;
                        })() }
                    </ul>
                </div>
                </div>
            `
        })

        // add list-group-item into unordered list
        partnersList.append(newItem);
    }
}