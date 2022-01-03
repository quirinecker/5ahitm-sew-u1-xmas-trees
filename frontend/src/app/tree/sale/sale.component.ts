import {Component, OnInit} from '@angular/core';
import {BackendService, ITree} from "../../shared/backend.service";
import {SellDateService} from "../../shared/sell-date.service";

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

    public tree: ITree;

    constructor(private readonly dataService: SellDateService,
                private readonly backendService: BackendService) {
        this.tree = dataService.tree!;
    }

    ngOnInit(): void {
    }

}
