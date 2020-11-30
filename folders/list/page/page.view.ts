namespace $.$$ {
	export class $my_tsmb_folders_list_page extends $.$my_tsmb_folders_list_page {

		folders() {
			return this.$.$my_tsmb_folders_list.all()
		}

		items() {
			return Object.keys( this.folders() ).map( name => this.Item( name ) )
		}

		item_id( name: string ) {
			return this.folders()[ name ].name
		}

		item_path( name: string ) {
			return this.folders()[ name ].path
		}

		item_arg( name: string ) {
			return {
				folder: name,
				danger: null,
			}
		}

	}
}
