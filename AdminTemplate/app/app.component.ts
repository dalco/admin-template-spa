import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    sidenavOpen: boolean;

    ngAfterViewInit() {
        var that = this;
        $(function() {
            $('.sidebar-toggle')
                .click(function() {
                    // Calling a function in case you want to expand upon this.
                    toggleNav();
                });
        });

        function toggleNav() {
            if ($('#wrapper').hasClass('show-nav')) {
                // Do things on Nav Close
                $('#wrapper').removeClass('show-nav');
                that.sidenavOpen = false;
            } else {
                // Do things on Nav Open
                $('#wrapper').addClass('show-nav');
                that.sidenavOpen = true;
            }
        }
    }

}