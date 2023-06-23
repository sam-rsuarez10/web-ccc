<template>
    <div>
        <div class="bee-page-container">
            <div class="bee-row bee-row-1">
                <div class="bee-row-content reverse">
                    <div class="bee-col bee-col-1 bee-col-w2">
                        <div class="bee-block bee-block-1 bee-divider">
                            <div class="spacer" style="height:0px;"></div>
                        </div>
                    </div>
                    <div class="bee-col bee-col-2 bee-col-w4">
                        <div class="bee-block bee-block-1 bee-divider">
                            <div class="spacer" style="height:55px;"></div>
                        </div>
                        <div class="bee-block bee-block-2 bee-heading">
                            <h1
                                style="color:#021332;direction:ltr;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:38px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">
                                <strong>Escuela dominical</strong>
                            </h1>
                        </div>
                        <div class="bee-block bee-block-3 bee-text">
                            <div class="bee-text-content"
                                style="font-size: 14px; line-height: 180%; font-family: inherit; color: #6e6e6f;">
                                <p style="font-size: 14px; line-height: 25px;"><span
                                        style="font-size: 20px; line-height: 36px;">Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</span></p>
                            </div>
                        </div>
                        <div class="bee-block bee-block-4 bee-text">
                            <div class="bee-text-content"
                                style="font-size: 14px; line-height: 180%; font-family: inherit; color: #6e6e6f;">
                                <p style="font-size: 14px; line-height: 25px;"><span
                                        style="font-size: 20px; line-height: 36px;">Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</span></p>
                            </div>
                        </div>
                        <div class="bee-block bee-block-5 bee-divider">
                            <div class="spacer" style="height:5px;"></div>
                        </div>
                    </div>
                    <div class="bee-col bee-col-3 bee-col-w5">
                        <div class="bee-block bee-block-1 bee-image"><img alt="Kid Education"
                                class="bee-center bee-fixedwidth bee-fullwidthOnMobile" src="../../assets/Education.png"
                                style="max-width:450px;" /></div>
                    </div>
                    <div class="bee-col bee-col-4 bee-col-w1">
                        <div class="bee-block bee-block-1 bee-divider">
                            <div class="spacer" style="height:0px;"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bee-row,
.bee-row-content {
    position: relative
}

.bee-row-1,
.bee-row-2 {
    background-repeat: no-repeat
}

body {
    background-color: #fff6e9;
    color: #000;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif
}

a {
    color: #0068a5
}

* {
    box-sizing: border-box
}

body,
h1,
p {
    margin: 0
}

.bee-row-content {
    max-width: 1440px;
    margin: 0 auto;
    display: flex
}

.bee-row-content.reverse,
.bee-row-content.reverse .bee-col {
    -moz-transform: scale(1, -1);
    -webkit-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    transform: scale(1, -1)
}

.bee-row-content .bee-col-w1 {
    flex-basis: 8%
}

.bee-row-content .bee-col-w2 {
    flex-basis: 17%
}

.bee-row-content .bee-col-w4 {
    flex-basis: 33%
}

.bee-row-content .bee-col-w5 {
    flex-basis: 42%
}

.bee-row-content .bee-col-w12 {
    flex-basis: 100%
}

.bee-icon .bee-icon-label-right a {
    text-decoration: none
}

.bee-divider,
.bee-image {
    overflow: auto
}

.bee-image .bee-center {
    margin: 0 auto
}

.bee-row-1 .bee-col-3 .bee-block-1 {
    width: 100%
}

.bee-icon {
    display: inline-block;
    vertical-align: middle
}

.bee-icon .bee-content {
    display: flex;
    align-items: center
}

.bee-image img {
    display: block;
    width: 100%
}

.bee-text {
    overflow-wrap: anywhere
}

@media (max-width:768px) {
    .bee-row-content:not(.no_stack) {
        display: block
    }
}

.bee-row-1 {
    background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4441/top_main_hero.png');
    background-position: center top
}

.bee-row-1 .bee-row-content,
.bee-row-2 .bee-row-content {
    background-repeat: no-repeat;
    color: #000
}

.bee-row-1 .bee-col-1,
.bee-row-1 .bee-col-2,
.bee-row-1 .bee-col-3 {
    padding-top: 5px
}

.bee-row-1 .bee-col-2 .bee-block-1,
.bee-row-1 .bee-col-2 .bee-block-3,
.bee-row-1 .bee-col-2 .bee-block-4,
.bee-row-1 .bee-col-2 .bee-block-5 {
    padding: 10px
}

.bee-row-1 .bee-col-4,
.bee-row-2 .bee-col-1,
.bee-row-2 .bee-col-1 .bee-block-1 {
    padding-bottom: 5px;
    padding-top: 5px
}

.bee-row-1 .bee-col-2 .bee-block-2 {
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    width: 100%
}

.bee-row-2 .bee-col-1 .bee-block-1 {
    color: #9d9d9d;
    font-family: inherit;
    font-size: 15px;
    text-align: center
}

.bee-row-2 .bee-col-1 .bee-block-1 .bee-icon-image {
    padding: 5px 6px 5px 5px
}

.bee-row-2 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
    margin-left: 0
}

.bee-row-2 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
    margin-right: 0
}
</style>