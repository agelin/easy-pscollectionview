easy-pscollectionview
=====================

This is a easy pscollectionview by javascript.


required jQuery

<script type="text/javascript" src="pscollection.js"></script>

<div id="id_for_your_div"></div>
<script type="text/javascript">

var pscollection = new PSCollection(4,180); // cols = 4,   width=180 per cell
pscollection.show($("#id_for_your_div"));


pscollection.appendCell(.....);

</script>
