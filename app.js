$( '#lightbox' ).Chocolat( { enableZoom: false } );

// Search functionality
$( '.inputSearch' ).on( 'keyup', function() {
	var filter = $( this ).val().toLowerCase();

	$( '.chocolat-image' ).each( function() {

		if ( $( this ).attr( 'title' ).toLowerCase().search( new RegExp( filter ) ) < 0 ) {
			$( this ).fadeOut();
		} else {
			$( this ).show();
		}
	});
});
