import { Component } from '@angular/core';


@Component
({
    selector : 'app-body',
    templateUrl : './body.component.html',
})
export class BodyComponent
{
    showCard = true;

    prahse = {
        author: 'Ben Parker',
        message: 'A great power requires a greate responsability',
    };

    actors = ['Spiderman', 'Peter Parker', 'Aunt May', 'Mary Jain', 'Venom', ];

}