namespace $.$$ {
	export class $my_tsmb extends $.$my_tsmb {

		section() {
			return this.$.$mol_state_arg.value( 'section' )
		}
		
		folder() {
			return this.$.$mol_state_arg.value( 'folder' )!
		}
		
		danger() {
			return this.$.$mol_state_arg.value( 'danger' ) !== null
		}
		
		@ $mol_mem
		pages() {

			if( !this.$.$my_tsmb_auth.signed() ) {
				return [ this.Auth() ]
			}

			const section = this.section()
			const folder = this.folder()
			const danger = this.danger()

			return [
				this.Menu(),
				... section === 'folders' ? [ this.Folders_list() ] : [],
				... folder !== null ? [ this.Folders_item( folder ) ] : [],
				... danger ? [ this.Danger() ] : []
			]

		}

		logout() {
			this.$.$my_tsmb_auth.drop()
		}

	}
}
