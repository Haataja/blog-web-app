/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog.blog;

import org.springframework.data.repository.CrudRepository;

/**
 * Class for handling database events.
 */
public interface BlogRepository extends CrudRepository<BlogPost,Long> {

    /**
     * Gets all posts at the database so that the newest one is first.
     * @return all posts at the database so that the newest one is first.
     */
    Iterable<BlogPost> findAllByOrderByIdDesc();
}
