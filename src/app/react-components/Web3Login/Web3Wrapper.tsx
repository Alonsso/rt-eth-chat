import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react";
import { createRoot } from 'react-dom/client';

import { Web3Login } from "./Web3Login";

const containerElementName = 'web3LoginContainer';

@Component({
    selector: 'wrapper-component',
    encapsulation: ViewEncapsulation.None,
    template: `<span #${containerElementName}></span>`
})
export class Web3Wrapper implements OnInit{
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
    
    root:any;

    ngAfterViewInit(){
        this.render();
    }

    private render(){
        this.root.render(
            <React.Fragment>
                <Web3Login />
            </React.Fragment>
        )
    }

    ngOnInit(){
        this.root = createRoot(this.containerRef.nativeElement);
    }
}