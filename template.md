<!-- edit area -->



<!-- edit area -->


<br><br>
<p><a id="print-noanswer" class="print" href="javascript:void(0);"></a></p>
<p><a id="print-answer" class="print" href="javascript:void(0);"></a></p>
<br>

>修正は [GitHub#issues](https://github.com/st22182ti/sekaishi/issues) から

<div style="color:rgba(0,0,0,0.7);font-size:0.8rem;text-align:center;margin-top:5rem;">
    &copy; mt 2024 All rights reserved
</div>
<div id="space"></div>
<label id="o-header" for="show">
        <input id="show" class="checkbox" type="checkbox" onchange="show();">
    <span id="label">&nbsp;&nbsp;&nbsp;&nbsp;解答を全て表示</span>
</label>
<!-- access counter -->
<iframe style="width:0px;height:0px;opacity:0;" src="https://thomasgreena.blogspot.com/2023/06/blog-post.html" id="access_count"></iframe>
<script defer src="main.js"></script>
<style>
    p {
        margin-top: 2.4em !important;
        margin-bottom: 3px !important;
    }
    u {
        display: block;
        padding-bottom: 1em;
        color: #4c7d59;
        text-decoration: none;
    }
    u::before {
        content: "Q．";
    }
    u::after {
        content: "\A";
        white-space: pre;
    }
    .info, .q {
        position: relative;
        padding: 16px 2.5em;;
        margin: 24px 0 50px 0;
        border-radius: 8px;
        z-index: 0;
    }
    .info {
        background-color: #f0fae9;
    }
    .q {
        background-color: #fbf5e0;
    }
    .info::after,
    .q::after {
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        width: 3px;
        content: "";
        display: inline-block;
        border-radius: 8px;
        z-index: 1;
    }
    .info::after {
        background-color: #66cb1b;
    }
    .q::after {
        background-color: #e0af00;
    }
</style>
