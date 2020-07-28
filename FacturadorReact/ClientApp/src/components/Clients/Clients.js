import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEdit, faTimes, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

export class Clients extends Component {
    static displayName = Clients.name;

    render() {
        return (
            <div class="card">
                <div class="card-header text-center">
                    <h4 id="tabelLabel">Catalogo de Clientes</h4>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="col-auto">
                            <div class="form-group">
                                <span>
                                    Razón Social / RFC:
                                </span>
                                <div class="input-group">
                                    <div class="input-group-prepend w-40">
                                        <div class="input-group w-100">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                                            </div>
                                            <input class="form-control" readonly id="searchClient" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="form-group">
                                <button class="btn btn-lg btn-primary"><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row" style={{ padding: '0 15px' }}>
                                <table class='table table-hover table-responsive' aria-labelledby="tabelLabel">
                                    <thead>
                                        <tr>
                                            <th>RFC</th>
                                            <th>Razón Social</th>
                                            <th>Calle</th>
                                            <th>Colonia</th>
                                            <th>No. Exterior</th>
                                            <th>Télefono</th>
                                            <th>E-mail</th>
                                            <th colspan="2" style={{ textAlign: 'center' }}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>XAXX010101000</td>
                                            <td>Cliente Generico</td>
                                            <td>Calle 1</td>
                                            <td>Centro</td>
                                            <td>123</td>
                                            <td>(987) 654 32 10</td>
                                            <td>alguien@correo.com</td>
                                            <td><button type="button" class="btn ml-1" data-toggle="tooltip" data-placement="bottom" title="Actualizar Cliente"><FontAwesomeIcon icon={faEdit} /></button></td>
                                            <td><button type="button" class="btn ml-1" data-toggle="tooltip" data-placement="bottom" title="Modificar Cliente"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
