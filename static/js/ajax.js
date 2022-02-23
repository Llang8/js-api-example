// Create new XHR object
const xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        populateEmployees(data)

        let skills = []

        for (const person of data) {
            for (const skill in person.skills) {
                if (!skills.includes(skill)) {
                    skills.push(skill)
                }
            }
        }

        skills.forEach((skill) => {
            let skillOption = document.createElement('option')
            skillOption.value = skill
            skillOption.innerText = skill
            
            skillSort.appendChild(skillOption)
        })

        skillSort.addEventListener('change', (e) => {
            let sortBy = e.target.value
            populateEmployees(data, sortBy)
        })
    }
}

xhr.open('GET', './static/data.json');

xhr.send()

function populateEmployees(people, sortBy='default') {
    employeeList.innerHTML = ''

    if (sortBy !== 'default') {
        people = people.sort((a,b) => {
            if (!(sortBy in a.skills)) {
                return 1
            }

            if (!(sortBy in b.skills)) {
                return -1
            }

            if (a.skills[sortBy] > b.skills[sortBy]) {
                return -1
            } else if (a.skills[sortBy] < b.skills[sortBy]) {
                return 1
            } else {
                return 0
            }
        })
    }

    // loop over data
    for (const person of people) {
        // create new list-group-item
        let newItem = document.createElement('li');
        newItem.classList.add('list-group-item');
        newItem.innerText = `${ person.firstName } ${ person.lastName }`
        newItem.dataset.id = person.id

        // add active class on hover, remove it on mouseout
        newItem.addEventListener('mouseover', function() {
            newItem.classList.toggle('active');
        });
        newItem.addEventListener('mouseout', function() {
            newItem.classList.remove('active');
        });

        // add click event listener
        newItem.addEventListener('click', function() {
            employeeCardContainer.innerHTML = `
                <div class="card border-primary" data-id=${ person.id }>
                <div class="card-body">
                    <h4 class="card-title">${ person.firstName } ${ person.lastName }</h4>
                    <p class="card-text">${ person.occupation }</p>
                </div>
                <div class="card-footer">
                    <ul class="list-group">
                        ${ (function() {
                            let lgi = '';

                            for (const skill in person.skills) {
                                lgi += `<li class="list-group-item">
                                            ${ skill }
                                            <span class="float-right">
                                                ${ person.skills[skill] }
                                            </span>
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
        employeeList.append(newItem);
    }
}

/* let cards = document.querySelectorAll('.my-card')

cards.forEach((card) => {
    console.log(card.dataset)
    card.style.backgroundColor = card.dataset.color
    card.style.height = card.dataset.height
}) */