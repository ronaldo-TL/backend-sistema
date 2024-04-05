<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Tabla usuarios</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Usuario
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Funciones
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Estado
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Acciones
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Ronald Titirico</h6>
                    <p class="text-xs text-secondary mb-0">
                      admin@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Administrador</p>
                <p class="text-xs text-secondary mb-0">MJTI</p>
              </td> 
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">ACTIVO</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <!-- src="../../assets/img/team-3.jpg"   -->
                    <img
                      class="avatar avatar-sm me-3"
                      alt="user2"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">ADMINISTRADOR</h6>
                    <p class="text-xs text-secondary mb-0">
                      admin@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Admin</p>
                <p class="text-xs text-secondary mb-0">Admin</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary"
                  >Inactivo</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >11/01/19</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
