namespace $.$$ {
	export class $my_tsmb_folders_list extends $mol_object2 {

		@ $mol_mem
		static all( next?: Record< string , typeof $my_tsmb_folders.Value > ) {

			if( next ) return next

			const Response = $mol_data_record({
				shares: $mol_data_array( $my_tsmb_folders )
			})
			
			const resp = this.$.$my_tsmb_transport.load( 'shares' )
			
			const dict = {} as Record< string , typeof $my_tsmb_folders.Value >
			
			for( const share of Response( resp ).shares ) {
				dict[ share.name ] = share
			}
			
			return dict
		}
	}
}
