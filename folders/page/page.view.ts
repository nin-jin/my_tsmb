namespace $.$$ {
	export class $my_tsmb_folders_page extends $.$my_tsmb_folders_page {

		title() {
			return super.title().replace( '{id}', this.id() )
		}

		tools() {
			return [
				... this.id() ? [ this.Danger() ] : [],
				this.Close(),
			]
		}

		@ $mol_mem
		folder( next?: typeof $my_tsmb_folders.Value ) {

			if( next !== undefined ) return next

			const id = this.id()

			const resp =
				id ? this.$.$my_tsmb_transport.load( `share/${ id }` ) :
				{
					"name": '',                 // Name of share
					"type": '',                 // type of the share
					"remark": '',               // option comments
					"path": '',               // share path
					"case-insensitive": false,    // if accessis case-insensetive
					"files-allow": '',          // Optional set of patterns as a filter to allow accessing and listing files
					"files-deny": '',           // Optional set of patterns as a filter to deny accessing and listing files
					// "l2oplock": false,            // Server does not issue exclusive caching rights on share
					"ca": false,                  // if share is highly available
					"ca-params": '',            // ca params
					"map-attributes": '',       // list of methods for keeping SMB file attributes
					"encrypt": false,             // Enable encryption on the share
					"permissions": '',          // share access permissions
					"vfs": '',                  // VFS parameters
					"vfs-zerocopy-write": false,  // Whether VFS should attempt zero-copy writes
					"vfs-zerocopy-read": false,   // Whether VFS should attempt zero-copy reads
				}

			return $my_tsmb_folders( resp )
		}

		@ $mol_mem
		keys_editable() {
			return Object.keys( this.folder() ).filter( key => key !== 'name' )
		}

		fields() {
			return this.keys_editable().map( id => this.Field( id ) )
		}

		Field( id: string ) {
			switch( typeof this.folder()[ id ] ) {
				case 'string': return this.Field_text( id )
				case 'boolean': return this.Field_flag( id )
				default: return null as any as never
			}
		}

		field_title( id: string ) {
			return id
		}

		field_enabled( id: string ) {
			const mutable = [ "encrypt", "permission", "remark", "files-allow", "files-deny" ]
			return this.id() ? mutable.includes( id ) : true
			
		}

		@ $mol_mem_key
		field_text( id: string, next?: string ) {
			return String( next ?? this.folder()[ id ] ?? '' )
		}	

		@ $mol_mem_key
		field_flag( id: string, next?: boolean ) {
			return Boolean( next ?? this.folder()[ id ] ?? false )
		}

		field_value( id: string ) {
			switch( typeof this.folder()[ id ] ) {
				case 'string': return this.field_text( id )
				case 'boolean': return this.field_flag( id )
				default: return null as any as never
			}
		}

		save_enabled() {
			const folder = this.folder()
			for( const key of this.keys_editable() ) {
				if( folder[ key ] !== this.field_value( key ) ) return true
			}
			return false
		}
		
		@ $mol_fiber.method
		save() {

			const folder = {} as any
			for( const key of this.keys_editable() ) {
				folder[ key ] = this.field_value( key )
			}

			const req = { "audit-level": "10" }
			for( const key in folder ) {
				req[ key ] = String( folder[ key ] )
			}
			
			let id = $mol_fiber.run( ()=> this.id() || $mol_guid() )
			folder.name = id
			const uri = `share/${id}`

			const resp = this.$.$my_tsmb_transport.save( uri, 'put', req )

			this.$.$mol_state_arg.value( 'folder', id )
			this.folder( folder )

			this.$.$my_tsmb_folders_list.all({
				... this.$.$my_tsmb_folders_list.all(),
				[ id ]: folder,
			})

		}

	}
}
