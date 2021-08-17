

$(document).ready(function (){
    $('#open-4').click(function(event) {
		$('#dialog-4').addClass('show');
		$('.background').addClass('show');
	});
	$('#close-4').click(function(event) {
		$('#dialog-4').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-4').removeClass('show');
		$('.background').removeClass('show');
	});
});


<div class="cac-nut">
            <button id="open-4">ABC</button>
        </div>

        <div class="background"></div>
        <div class="dialog" >
            <div class="dialog-body dialog-4" id="dialog-4">
                <h3 style="text-align: center;">Customer</h3>
                <div class="form-group">
                  <label for="name">Products</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Nhap san pham..." aria-describedby="helpId">
                  <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                    <label for="name">Products</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Nhap san pham..." aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                  </div>
                  <div class="form-group">
                    <label for="name">Products</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Nhap san pham..." aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                  </div>
                  
                <p style="text-align: center;">Welcome all people go to Blog Le Nghia.</p>
                <button id="close-4">&times;</button>
            </div>
        </div>
        
        
*{
    margin: 0;
    padding: 0;
}
body{
    background: #fafafa;
    width: 100%;
    height: 100%;
}

.cac-nut {
    width:  40%;
    margin: auto;
    margin-top: 5%;
    text-align: center;
}
.cac-nut button {
    background: #fafafa;
    box-shadow:  none;
    padding: 5px 10px;
    border: 1px solid #177695;
    color:  #177695;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px;
}

.cac-nut button:hover {
    background:  #177695;
    color: #fafafa;
}

.background{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: #7f8ca06e;
    top: 0px;
    left: 0px;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    
}
.dialog{
    position:  absolute;
    top: 20%;
    left: 50%;
    margin-left: -250px;
    width: 500px;
    height: 300px;
    z-index: 2;
    perspective: 1500px;
    
}
.dialog-body {
    position:  absolute;
    width: 500px;
    z-index: 2;
    opacity: 0;
    background-color: #fff;
    visibility: hidden;
    border-radius: 10px;
    padding: 15px;
    
}
.dialog-body button {
    font-size: 15px;
    text-align: center;
    width: 20px;
    height:  20px;
    position:  absolute;
    top: 0px;
    right:  0px;
    border:  none;
    color:  #fafafa;
    background: #b91717;
    cursor: pointer;
    border-top-right-radius: 5px;
}

.show{
    opacity: 1;
    visibility: visible;
    transition: 0.6s;
}
.dialog-4{
    /*tâm quay*/
    /*transform-origin: 100% 0% ; */
    transform: scale(0.1);
}
.dialog-4.show{
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}
